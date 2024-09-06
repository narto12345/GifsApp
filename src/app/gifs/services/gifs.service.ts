import { Injectable } from '@angular/core';
import { GifsHttp } from '../interfaces/gifs-http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private readonly _url: string = "https://api.giphy.com/v1/gifs/search?api_key=dUxGbvyE2fRw5wG7xKE5luLREui1cK4L";
  // private readonly _url: string = "https://api.giphy.com/v1/gifs/search";

  private limit: string = "5";

  // LocalStorage
  private _tagsHistory: string[] = [];
  private _gifs!: GifsHttp;

  constructor() {
    this._tagsHistory = JSON.parse(localStorage.getItem("tags") ?? "[]");
  }

  public get tagsHistory(): string[] {
    return [... this._tagsHistory];
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(tagFilter => tagFilter !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);

    this.saveLocalStorage();

  }

  public async searchGifs(search: string, searchLimit?: string): Promise<void> {

    console.log(searchLimit);
    if (searchLimit) this.limit = searchLimit;

    let respuesta: GifsHttp = await fetch(`${this._url}&q=${search}&limit=${this.limit}`)
      .then(response => {
        return response.json()
      });

    console.log(`Cantidad de gifs: ${respuesta.data.length ?? 0}`);

    this._gifs = respuesta;
  }

  public get gifs(): GifsHttp {
    return this._gifs;
  }

  private saveLocalStorage(): void {
    localStorage.setItem("tags", JSON.stringify(this._tagsHistory));
  }

  public get getLimit(): string {
    return this.limit;
  }

}

import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { GifsHttp } from '../../interfaces/gifs-http';

@Component({
  selector: 'gifs-search-box',
  templateUrl: "./search-box.component.html",
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTexto') txtTexto!: ElementRef<HTMLInputElement>;

  public searchLimit: string[] = ["5", "10", "15", "20", "30", "40", "50"];
  public selectedLimit!: string;
  public lastSearch!: string | undefined;

  constructor(private gifsService: GifsService) {
    this.selectedLimit = this.gifsService.getLimit;
  }

  public addTagGif(searchLimit?: string): void {
    const tagSearch = this.txtTexto.nativeElement.value;
    this.gifsService.searchTag(tagSearch);
    this.txtTexto.nativeElement.value = "";

    if (searchLimit) {
      this.gifsService.searchGifs(this.getLastSearch, searchLimit);
      return;
    }

    this.gifsService.searchGifs(tagSearch, searchLimit);
  }

  public limitEvent(event: Event): void {
    const selectElement = event.target as HTMLSelectElement; // Casting
    const selectedValue = selectElement.value;
    this.addTagGif(selectedValue);
  }

  private get getLastSearch(): string {
    return this.lastSearch = this.gifsService.tagsHistory.find(() => true) ?? "";
  }
}

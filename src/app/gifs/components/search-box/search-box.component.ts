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

  public searchLimit: number[] = [5, 10, 15, 20, 30, 40, 50];

  constructor(private gifsService: GifsService) {
  }

  public addTagGif(searchLimit?: string): void {
    const tagSearch = this.txtTexto.nativeElement.value;
    this.gifsService.searchTag(tagSearch);
    this.txtTexto.nativeElement.value = "";

    this.gifsService.searchGifs(tagSearch, searchLimit);
  }

  public limitEvent(event: Event): void {
    const selectElement = event.target as HTMLSelectElement; // Casting
    const selectedValue = selectElement.value;
    this.addTagGif(selectedValue);
  }
}

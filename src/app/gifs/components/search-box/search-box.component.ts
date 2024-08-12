import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { GifsHttp } from '../../interfaces/gifs-http';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input (keyup.enter)="addTagGif()" #txtTexto type="text" class="form-control"
    placeholder="Buscar gifs...">
  `,
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTexto') txtTexto!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {
  }

  public addTagGif(): void {
    const tagSearch = this.txtTexto.nativeElement.value;
    this.gifsService.searchTag(tagSearch);
    this.txtTexto.nativeElement.value = "";

    this.gifsService.searchGifs(tagSearch);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Datum } from '../../interfaces/gifs-http';
import { DownloadGifService } from '../../services/download-gif.service';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public gifInternal!: Datum;

  constructor(private downloadGifService: DownloadGifService) { }

  ngOnInit() {
  }

  public downloadGif(urlGif: string, gifName: string): void {
    this.downloadGifService.downloadGif(urlGif, gifName);
  }

}

import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { GifsHttp } from '../../interfaces/gifs-http';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private gifService: GifsService) {
    this.gifService.searchGifs(this.gifService.tagsHistory.shift() ?? "");
  }

  public get gifs(): GifsHttp {
    return this.gifService.gifs;
  }

}

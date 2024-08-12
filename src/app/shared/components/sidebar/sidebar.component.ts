import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {
  }

  public get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  public searchGig(tagSearch: string): void {
    this.gifsService.searchGifs(tagSearch);
    this.gifsService.searchTag(tagSearch);
    // console.log({tagSearch});
  }

}

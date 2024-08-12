import { Component, Input } from '@angular/core';
import { GifsHttp } from '../../interfaces/gifs-http';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input()
  public gifs!: GifsHttp | null;

}

import { Component, Input, OnInit } from '@angular/core';
import { Datum } from '../../interfaces/gifs-http';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public gifInternal!: Datum;

  constructor() { }

  ngOnInit() {
  }

}

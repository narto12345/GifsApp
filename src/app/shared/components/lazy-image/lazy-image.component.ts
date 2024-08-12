import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  public hasLoader: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  imageLoad(): void {
    console.log("Image loaded");
    this.hasLoader = true;
  }

}

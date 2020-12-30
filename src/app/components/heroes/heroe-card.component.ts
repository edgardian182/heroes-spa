import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: []
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() selectHeroe: EventEmitter<number>;

  constructor() {
    this.selectHeroe = new EventEmitter();
  }

  ngOnInit() {
  }

  showHeroe() {
    this.selectHeroe.emit(this.index);
  }
}

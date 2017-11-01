import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  card

  @Output()
  cardClicked: EventEmitter<{ title: string, success: boolean }> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  raiseCardClicked() {
    this.cardClicked.emit({ title: this.card.title, success: true })
  }
}

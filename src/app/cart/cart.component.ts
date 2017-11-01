import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalSelectedCards=0;
  cardList = [{
    id: 1,
    title: 'Card1'
  }, {
    id: 2,
    title: 'Card2'
  }, {
    id: 3,
    title: 'Card3'
  }, {
    id: 4,
    title: 'Card4'
  }]
  constructor() { }

  ngOnInit() {
  }

  cardClicked(eventArgs){
    console.log(eventArgs)
  }

}

import { Component } from '@angular/core';
import { CardModel } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  defaultCard = {
    name: 'Jane Appleseed',
    cardNumber: ' 0000 0000 0000 0000',
    expirationDateMonth: '00',
    expirationDateYear: '00',
    cvc: '000'
  };
  card: CardModel = this.defaultCard;
  completed:boolean = false;


  onConfirm(event: boolean) {

    this.completed = event;
  }
}

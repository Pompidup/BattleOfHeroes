import { Component } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './character';
import { deck1 } from './deck';
import { deck2 } from './deck';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Battle-of-Heroes';
  cardList: Card[];
  deck1 = deck1;
  deck2 = deck2;

  constructor(private myService: CardService) {
    this.cardList = [];
    this.myService.getCardArray("http://tours.wilders.dev/api/characters").subscribe(
      (param_card: Card[]) => {
        this.cardList = param_card;
      }
    )
  }
}


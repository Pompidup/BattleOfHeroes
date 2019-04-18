import { Component } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Battle-of-Heroes';
  cardList: Card[];
  deck: Card[];

  constructor(private myService: CardService) {
    this.cardList = [];
    this.myService.getCardArray("http://easteregg.wildcodeschool.fr/api/characters").subscribe(
      (param_card: Card[]) => {
        this.cardList = param_card;
      }
    )
  }
}
/*public getRandomDeck() {
    for (let i:number; i < 6;i++){
      this.deck .push(this.cardList[Math.floor(Math.random() * (57 - 0 + 1)) + 0]);
    }
    return this.deck;
  }*/
 // this.deck = param_card[Math.floor(Math.random() * (57 - 0 + 1)) + 0];

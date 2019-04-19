import { Component, OnInit } from '@angular/core';
import { deck1 } from '../deck'
import { deck2 } from '../deck'
import { Card } from '../character'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public deck1:Card[] = deck1;
  public deck2:Card[] = deck2;
  public scorePlayer1:number = 0;
  public scoreComputer:number = 0;

  constructor() { }

  ngOnInit() {
  }

  bouton1() {
    document.getElementById("card7").style.borderColor = "gold";
    document.getElementById("card5").style.borderColor = "red";
    this.fight(Number(deck1[0].skills[0]), Number(deck1[0].skills[1]), Number(deck1[0].skills[2]), Number(deck2[4].skills[0]), Number(deck2[4].skills[1]), Number(deck2[4].skills[2]));
  }
  bouton2() {
    document.getElementById("card8").style.borderColor = "gold";
    document.getElementById("card3").style.borderColor = "red";
    this.fight(Number(deck1[1].skills[0]), Number(deck1[1].skills[1]), Number(deck1[1].skills[2]), Number(deck2[2].skills[0]), Number(deck2[2].skills[1]), Number(deck2[2].skills[2]));
}
  bouton3() {
    document.getElementById("card9").style.borderColor = "gold";
    document.getElementById("card1").style.borderColor = "red";
    this.fight(Number(deck1[2].skills[0]), Number(deck1[2].skills[1]), Number(deck1[2].skills[2]), Number(deck2[0].skills[0]), Number(deck2[0].skills[1]), Number(deck2[0].skills[2]));
  }
  bouton4() {
    document.getElementById("card10").style.borderColor = "gold";
    document.getElementById("card6").style.borderColor = "red";
    this.fight(Number(deck1[3].skills[0]), Number(deck1[3].skills[1]), Number(deck1[3].skills[2]), Number(deck2[5].skills[0]), Number(deck2[5].skills[1]), Number(deck2[5].skills[2]));
  }
  bouton5() {
    document.getElementById("card11").style.borderColor = "gold";
    document.getElementById("card4").style.borderColor = "red";
    this.fight(Number(deck1[4].skills[0]), Number(deck1[4].skills[1]), Number(deck1[4].skills[2]), Number(deck2[3].skills[0]), Number(deck2[3].skills[1]), Number(deck2[3].skills[2]));

  }
  bouton6() {
    document.getElementById("card12").style.borderColor = "gold";
    document.getElementById("card2").style.borderColor = "red";
    this.fight(Number(deck1[5].skills[0]), Number(deck1[5].skills[1]), Number(deck1[5].skills[2]), Number(deck2[1].skills[0]), Number(deck2[1].skills[1]), Number(deck2[1].skills[2]));
  }

  fight(d1s1:number, d1s2:number, d1s3:number, d2s1:number, d2s2:number, d2s3:number) {
    let scoreP1:number = 0;
    let scoreP2:number = 0;
    if (d1s1 > d2s1) {scoreP1++}else if (d1s1 < d2s1) {scoreP2++};
    if (d1s2 > d2s2) {scoreP1++}else if (d1s2 < d2s2) {scoreP2++};
    if (d1s3 > d2s3) {scoreP1++}else if (d1s3 < d2s3) {scoreP2++};
    if (scoreP1 > scoreP2){alert("1 point for player 1"); this.scorePlayer1++}else if (scoreP1 < scoreP2){alert("1 point for player 2"); this.scoreComputer++}else {alert("Match nul")};

  }

}

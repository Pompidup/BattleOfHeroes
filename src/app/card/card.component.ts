import { Component, OnInit } from '@angular/core';
import { deck1 } from '../deck'
import { deck2 } from '../deck'
import { Card } from '../character'
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public deck1: Card[] = deck1;
  public deck2: Card[] = deck2;
  public scorePlayer1: number = 0;
  public scoreComputer: number = 0;
  public cpt: number = 0;
  public winner: string = "";
  public loser: string = "";
  public equality: string = "";

  constructor() { }

  ngOnInit() {
  }

  bouton1() {
    document.getElementById("card7").style.border = "6px solid gold";
    document.getElementById("card5").style.border = "6px solid red";
    this.fight(Number(deck1[0].skills[0]), Number(deck1[0].skills[1]), Number(deck1[0].skills[2]), Number(deck2[4].skills[0]), Number(deck2[4].skills[1]), Number(deck2[4].skills[2]));
    this.hiddenCard("card7", "card5", "btn1");
  }
  bouton2() {
    document.getElementById("card8").style.border = "6px solid gold";
    document.getElementById("card3").style.border = "6px solid red";
    this.fight(Number(deck1[1].skills[0]), Number(deck1[1].skills[1]), Number(deck1[1].skills[2]), Number(deck2[2].skills[0]), Number(deck2[2].skills[1]), Number(deck2[2].skills[2]));
    this.hiddenCard("card8", "card3", "btn2");
  }
  bouton3() {
    document.getElementById("card9").style.border = "6px solid gold";
    document.getElementById("card1").style.border = "6px solid red";
    this.fight(Number(deck1[2].skills[0]), Number(deck1[2].skills[1]), Number(deck1[2].skills[2]), Number(deck2[0].skills[0]), Number(deck2[0].skills[1]), Number(deck2[0].skills[2]));
    this.hiddenCard("card9", "card1", "btn3");
  }
  bouton4() {
    document.getElementById("card10").style.border = "6px solid gold";
    document.getElementById("card6").style.border = "6px solid red";
    this.fight(Number(deck1[3].skills[0]), Number(deck1[3].skills[1]), Number(deck1[3].skills[2]), Number(deck2[5].skills[0]), Number(deck2[5].skills[1]), Number(deck2[5].skills[2]));
    this.hiddenCard("card10", "card6", "btn4");
  }
  bouton5() {
    document.getElementById("card11").style.border = "6px solid gold";
    document.getElementById("card4").style.border = "6px solid red";
    this.fight(Number(deck1[4].skills[0]), Number(deck1[4].skills[1]), Number(deck1[4].skills[2]), Number(deck2[3].skills[0]), Number(deck2[3].skills[1]), Number(deck2[3].skills[2]));
    this.hiddenCard("card11", "card4", "btn5");
  }
  bouton6() {
    document.getElementById("card12").style.border = "6px solid gold";

    document.getElementById("card2").style.border = "6px solid red";
    this.fight(Number(deck1[5].skills[0]), Number(deck1[5].skills[1]), Number(deck1[5].skills[2]), Number(deck2[1].skills[0]), Number(deck2[1].skills[1]), Number(deck2[1].skills[2]));
    this.hiddenCard("card12", "card2", "btn6");
  }

  fight(d1s1: number, d1s2: number, d1s3: number, d2s1: number, d2s2: number, d2s3: number): void {
    let scoreP1: number = 0;
    let scoreP2: number = 0;
    this.cpt++
    // console.log(this.cpt);
    if (d1s1 > d2s1) { scoreP1++ } else if (d1s1 < d2s1) { scoreP2++ };
    if (d1s2 > d2s2) { scoreP1++ } else if (d1s2 < d2s2) { scoreP2++ };
    if (d1s3 > d2s3) { scoreP1++ } else if (d1s3 < d2s3) { scoreP2++ };
    if (scoreP1 > scoreP2) {
      this.scorePlayer1++
    } else if (scoreP1 < scoreP2) {
      this.scoreComputer++
    };
    if (this.cpt == 6) {
      if (this.scorePlayer1 > this.scoreComputer) {
        this.winner = "You Win !";
      } else if (this.scorePlayer1 < this.scoreComputer) {
        this.loser = "You Lose !";
      } else {
        this.equality = "Equality";
      };
    }
  }

  hiddenCard(id1: string, id2: string, id3: string): void {
    if (this.cpt < 6) {
      setTimeout(function () {
        document.getElementById(id1).style.display = 'none';
        document.getElementById(id2).style.display = 'none';
        document.getElementById(id3).style.display = 'none';
      }, 1200);
    }else {
      document.getElementById(id1).style.display = 'none';
      document.getElementById(id2).style.display = 'none';
      document.getElementById(id3).style.display = 'none';
    };

  }
  playAudio() {
    let audio = new Audio();
    audio.src = "../../assets/music.mp3";
    audio.load();
    audio.play();
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { deck1 } from './deck';
import { deck2 } from './deck';
import { Card } from "../app/character";



@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private myService: HttpClient) { }



  public getCardArray(adress: string): Observable<any> {
    return this.myService.get(adress).pipe(
      map(
        (paramData: any[]) => {
          let current = null;
          let cardList: Card[] = [];


          for (let i: number = 0; i < paramData.length; i++) {
            current = paramData[i];

            if (current !== 0) {
              const card: Card = new Card();

              card.id = current.id;
              card.name = current.name;
              card.gender = current.gender;
              card.origin = current.origin;
              card.image = current.image;
              const batard: string[] = [];
              for (let i:number = 0; i < current.skills.length; i++) {
                //console.log(current.skills[i]);
                var tmp: string[] = current.skills[i].split(':');
                //console.log(tmp[1]);
                batard.push(tmp[1]);
              }
              // console.log(batard);
              card.skills = batard;
              cardList.push(card);
            } else {
              console.log("error");
            }
          }
          for (let j:number = 0; j < 6; j++){
            let tmp = Math.floor(Math.random() * Math.floor(cardList.length));
            deck1.push(cardList[tmp]);
            // console.log(deck1);
          }
          for (let k:number = 0; k < 6; k++){
            let tmp = Math.floor(Math.random() * Math.floor(cardList.length));
            deck2.push(cardList[tmp]);
            // console.log(deck2);
          }

          return cardList;

        }
      )
    )
  }
}

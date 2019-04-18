import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
//import { Eggs } from "./app/eggs";
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
              let card: Card = new Card();
              card.id = current.id;
              card.name = current.name;
              card.gender = current.gender;
              card.origin = current.origin;
              card.image = current.image;
             // card.skills = current.[];

              cardList.push(card);
            } else {
              console.log("error");
            }
          }
          return cardList;
        }
      )
    )
  }
}

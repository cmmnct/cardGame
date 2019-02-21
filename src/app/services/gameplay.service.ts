import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { CardService } from './card.service';
import { SoundService } from './sound.service';
import { Observable, timer, Subscription } from 'rxjs';
import { Card } from '../models/card.model';
import { TimerService } from './timer.service';

@Injectable({
  providedIn: 'root'
})
export class GameplayService {

  timerSubscription: Subscription;
  step = 0;
  card1: Card;
  card2: Card;
  numberOfPictures = 0;
  score = 0;
  tries = 0;
  cardset: Card[];
  timerText: String = '0 : 00 : 00';
  showFooter = false;
  ticks = 0;
  boardClass = '';
  boardSizes = {
    sizes: [4, 5, 6]
  };
  gameTimer: Observable<Number> = timer(1000, 1000);
  clickEnabled: Boolean = true;

  hello = Observable.create(function(observer) {
    observer.next('Hello');
    observer.next('World');
  });

  initGame(event) {
    this.score = 0;
    this.tries = 0;
    this.step = 0;
    this.timerService.resetTimer();
    this.clickEnabled = true;
    this.timerSubscription = this.gameTimer.subscribe(t => {
      this.timerText = this.timerService.updatemyTimer();
    } );

  }

  handleMoves(card) {
    if (this.step === 0 && this.clickEnabled === true) {
      this.soundService.playSound(card);
      this.card1 = card;
      card.selected = true;
      this.step++;
    } else if (this.step === 1 && card.selected === false && this.clickEnabled === true) {
      this.card2 = card;
      this.clickEnabled = false;
      this.soundService.playSound(card);
      card.selected = true;
      this.evaluateMatch();

  }
}

  evaluateMatch() {
    const card1Id = this.card1.card1;
    const card2Id = this.card2.card1;
    this.step = 0;
    if (card1Id === card2Id) {
      const timeoutId = setTimeout(() => {
        console.log('Keep score');
        this.keepScore();
      }, 1000);
      navigator.vibrate(500);
    } else {
      const timeoutId = setTimeout(() => {
        this.nextMove();
      }, 2000);
    }
  }
  nextMove() {
    this.card1.selected = false;
    this.card2.selected = false;
    this.tries++;
    this.clickEnabled = true;

  }
  keepScore() {
    this.score++;
    this.tries++;

    this.card1.picked = true;
    this.card2.picked = true;


    if (this.score === this.numberOfPictures) {
      this.timerSubscription.unsubscribe();
    } else {
      this.clickEnabled = true;
    }
  }

constructor(private cardService: CardService, private timerService: TimerService, private soundService: SoundService) { }

}

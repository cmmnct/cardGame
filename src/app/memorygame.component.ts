import { Component } from '@angular/core';
import { CardService } from './services/card.service';
import { SoundService } from './services/sound.service';
import { Observable, timer, Subscription } from 'rxjs';
import { Card } from './models/card.model';
import { TimerService } from './services/timer.service';
import { GameplayService } from './services/gameplay.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memorygame.component.html',
  styleUrls: ['./memorygame.component.css']
})

export class MemorygameComponent {
  timerSubscription: Subscription;
  card1: Card;
  card2: Card;
  score = 0;
  tries = 0;
  numberOfPictures = 0;
  cardset: Card[];
  timerText: String = '0 : 00 : 00';
  showFooter = false;
  boardClass = '';
  boardSizes = {
    sizes: [4, 5, 6]
  };
  clickEnabled: Boolean = true;


  constructor(private cardService: CardService,
    public soundService: SoundService, private timerService: TimerService, private gameplayService: GameplayService
  ) { }

  onSelectFieldSize(event) {
    this.gameplayService.initGame(event);

    this.clickEnabled = true;

    switch (event.target.value) {
      case '4':
        this.boardClass = 'board4';
        break;
      case '5':
        this.boardClass = 'board5';
        break;
      case '6':
        this.boardClass = 'board6';
        break;
    }

    this.cardService.getCardset(event.target.value).subscribe((data => {
      this.cardset = data;
      this.numberOfPictures = this.cardset.length / 2;
      this.showFooter = true;
      this.timerSubscription = this.gameplayService.gameTimer.subscribe(t => {
        this.timerText = this.gameplayService.timerText;
        this.tries = this.gameplayService.tries;
        this.score = this.gameplayService.score;
      });
    }));
  }
  onClickCard(card) {
    this.gameplayService.handleMoves(card);

  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import {CardService} from './services/card.service';
import {SoundService} from './services/sound.service';
import { TimerService } from './services/timer.service';
import { GameplayService } from './services/gameplay.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    CardComponent
  ],
  providers: [CardService, SoundService, TimerService, GameplayService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

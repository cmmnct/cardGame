import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
seconds = 0;
minutes = 0;
hours = 0;
  constructor() { }

  resetTimer() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }

  updatemyTimer(): String {

    let timerText: String;

      this.seconds++;

    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours++;
    }
    if (this.seconds < 10 && this.minutes < 10) {
      timerText = `${this.hours} : 0${this.minutes} : 0${this.seconds}`;
    } else if (this.seconds < 10) {
      timerText = `${this.hours} : ${this.minutes} : 0${this.seconds}`;
    } else if (this.minutes < 10) {
      timerText = `${this.hours} : 0${this.minutes} : ${this.seconds}`;
    } else {
      timerText = `${this.hours} : ${this.minutes} : ${this.seconds}`;
    }
    return timerText;
  }


}


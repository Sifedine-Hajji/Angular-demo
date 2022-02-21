import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {
  seconds : number = 0;
  startTimer : any;

  //===================== STOP TIMER INTERVAL ===================//
  stopInterval() {
    clearInterval(this.startTimer);
    this.startTimer = undefined;
  }

  //===================== ADD EVENT LISTENER START BUTTON ===================//
  start() {
    if(this.startTimer === undefined){
      this.startTimer = setInterval(() => {
        this.seconds ++;
      }, 1000)
      
    }else {
      alert("Timer is already running!");
    }
  }



  //===================== ADD EVENT LISTENER RESET BUTTON ===================//
  reset() {
    this.stopInterval();
    this.seconds = 0;

  }
  //================== ADD EVENT LISTENER STOP"pause" BUTTON ================//
  pause() {
    this.stopInterval();
  }
  constructor() {}

  ngOnInit(): void {}

}
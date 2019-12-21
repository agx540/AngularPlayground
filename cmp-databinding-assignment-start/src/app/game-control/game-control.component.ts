import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  n: number;
  constructor() { }

  ngOnInit() {
  }

  onStartButton() {
    console.log('onStart');
    this.n = <any> setInterval(this.onEachSecond, 1000);
  }

  onEachSecond() {
    console.log('eachSecond');


  }

  onStopButton() {
    console.log('onStop');
    clearTimeout(this.n);
  }
}

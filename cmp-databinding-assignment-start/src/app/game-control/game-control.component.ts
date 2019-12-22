import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  index: number;
  @Output() newItemEvent = new EventEmitter<{eventCount: number}>();
  interval;

  constructor() {
    this.index = 0;
    console.log('constructor: ' + this.index);
  }

  ngOnInit() {
  }

  onStartButton() {
    console.log('onStart');

    this.interval = setInterval(() => {
      this.newItemEvent.emit({eventCount: this.index + 1});

      this.index++;
      console.log('onTimer: ' + this.index);
    }, 1000);
  }

  // onEachSecond() {
  //   console.log('eachSecond 11: ' + this.index);
  //   this.index = this.index + 1;
  //   console.log('eachSecond 22: ' + this.index);
  //   //this.newItemEvent.emit({index: this.index});
  //   //this.newItemEvent.emit();
  // }

  onStopButton() {
    console.log('onStop');
    clearTimeout(this.interval);
    this.index = 0;
  }
}

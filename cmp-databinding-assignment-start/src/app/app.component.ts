import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elementsOdd: number[] = [];
  elementsEven: number[] = [];
  onNewItemEvent(eventData: {eventCount: number}) {
    console.log('onNewItemEvent received: ' + eventData.eventCount);
    if(eventData.eventCount %2 === 1)
      this.elementsOdd.push(eventData.eventCount);
    else 
      this.elementsEven.push(eventData.eventCount);
  }
}

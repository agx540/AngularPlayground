import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  logs = [];
  toggleDisplayDetails = false;

  constructor() { }

  ngOnInit() {
  }

  onDisplayDetails(){
    this.toggleDisplayDetails = !this.toggleDisplayDetails;

    const time = new Date().toUTCString();

    this.logs.push(time + ' Show Message: ' + this.toggleDisplayDetails) ;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  message:any="My Message";

  myImage1:string = "assets/BookCafe.jpg";

  constructor() { }
}



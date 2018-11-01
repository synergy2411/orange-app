import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public authService : AuthService){}
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDBMMC4uQbXvX0MoTLHUPxn4-zf4oOTNQs",
      authDomain: "orange-app-66ba8.firebaseapp.com"
    })
  }
}

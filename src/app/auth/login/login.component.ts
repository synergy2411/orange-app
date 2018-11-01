import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onLogin(f: NgForm ){
    console.log(f);
    console.log("Username : " + f.value.username + 
      "\nPassword : " + f.value.password);
      this.authService.login(f.value.username, f.value.password )
  }
  
}

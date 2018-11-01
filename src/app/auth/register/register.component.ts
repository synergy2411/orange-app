import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.hasExclamationMark
  ]);
  registerForm : FormGroup;

  hasExclamationMark(input : FormControl){
    const hasExclamation = input.value.indexOf("!") >= 0;
    return hasExclamation ? null : { needExclamation : true}
  }

  constructor(
    private fb : FormBuilder,
    private authService : AuthService) {
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
   }

   onRegister(){
     console.log(this.registerForm);
     this.authService.register(
        this.registerForm.value.username,
        this.registerForm.value.password
        )
   }
  ngOnInit() {
  }

}

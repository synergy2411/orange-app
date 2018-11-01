import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token = null;
  constructor(private router : Router) { }

  getToken(){
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }

  logout(){
    this.token = null;
    firebase.auth().signOut()
    .then((response)=>{
      console.log("Signed out!");
      this.router.navigate(['login']);
    })
    .catch(err=>console.log(err))
  }

  login(email : string, password : string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response)=>{
        console.log("Logged In Successfully!", response);
        firebase.auth().currentUser.getIdToken()
          .then(token=>{
            this.token = token;
            console.log(this.token);
            this.router.navigate(['user']);
          })
          .catch(err=>{console.log("Error in fetching Token", err)})
      })
      .catch(err=>{
        console.log("Error Occured : ", err);
      });
  }
  register(email : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((response)=>{
      console.log("User Registered Successfully!", response);
    })
    .catch(err=>{
      console.log("Error Occured : ", err);
    });;
  }

}

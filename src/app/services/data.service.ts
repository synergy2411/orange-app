import { AuthService } from './auth.service';
import { User } from './../data/user.model';
import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
// import { map } from 'rxjs';

@Injectable()
export class DataService{
    counter : number = 0;
    
    getUserData(){
        return USER_DATA;
    }
    getHttpUserData(){
        return this.http.get("assets/data/user-data.json")
            .map(response=><User[]>response.json().userdata);    
    }
    getHttpClientUserData(){
        // return this.httpClient
        //     .get<User[]>("https://orange-app-66ba8.firebaseio.com/userdata.json?auth="+this.authService.getToken());
       
        // return this.httpClient
        //     .get<User[]>("https://orange-app-66ba8.firebaseio.com/userdata.json",{
        //         params : new HttpParams().set("auth", this.authService.getToken())
        //     });

        return this.httpClient
            .get<User[]>("https://orange-app-66ba8.firebaseio.com/userdata.json");
        
    }
    constructor(
        private http : Http,
        private httpClient : HttpClient,
        private authService : AuthService){}
}
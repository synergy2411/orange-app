import { DataService } from './../services/data.service';
import { User } from './../data/user.model';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
// import { USER_DATA } from '../data/mocks';

@Component({
    selector : "app-user",
    templateUrl : './user.component.html',
    changeDetection : ChangeDetectionStrategy.Default
})
export class UserComponent implements OnInit{
    str : string;
    users : User[];

    constructor(private dataService : DataService){}
    ngOnInit(){
        // this.users = USER_DATA;
        
        // this.users = this.dataService.getUserData();
        
        // this.dataService.getHttpUserData()
        // .subscribe(
        //     users=>this.users = users,
        //     (err)=>{console.log(err)},
        //     ()=>{console.log("Completed")}
        //     );

        this.dataService.getHttpClientUserData()
        .subscribe(
            users=>this.users = users,
            (err)=>{console.log(err)},
            ()=>{console.log("Completed")}
            );
    }
    moreInfo(user : User){
        alert(`${user.firstName} is working with ${user.company}!`);
    }

    ngOnDestroy(){
        // this.dataService.getHttpClientUserData()
        
    }
}
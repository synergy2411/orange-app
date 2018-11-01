import { DataService } from './../../services/data.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css'],
  providers : [DataService]
})
export class UserImgComponent implements OnInit {

  @Input('user') user : any;
  @Output('childEvent') childEvent  = new EventEmitter<any>();

  onMoreInfo(user : any){
    this.childEvent.emit(user);
  }
  constructor(public dataService : DataService) { }

  increase(){
    this.dataService.counter++;
  }

  ngOnInit() {
  }

}

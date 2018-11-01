import { DataService } from './../../services/data.service';
import { Component, OnInit, Input, 
    OnChanges, 
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked, 
    AfterViewInit, 
    AfterViewChecked, 
    OnDestroy, 
    SimpleChanges,
    ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class UserInfoComponent implements OnInit 
  // OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  // AfterViewInit, AfterViewChecked, OnDestroy 
  {
  @Input("user") user : any;
  @Input("str") str : string;
  
  // myClasses = ['border', 'size'];

  myClasses = {
    "border" : true,
    "size" : false
  }

  toggleClasses(){
    this.myClasses.border = !this.myClasses.border;
    this.myClasses.size = !this.myClasses.size;
  }
  increase(){
    this.dataService.counter++;
  }
  ngOnInit() {console.log("ngOnInit")}
  constructor(public dataService : DataService) { console.log("constructor") }
  ngOnChanges(changes : SimpleChanges){console.log("ngOnChanges", changes)}
  // ngOnInit() {console.log("ngOnInit")}
  // ngDoCheck(){console.log("ngDoCheck")}
  // ngAfterContentInit(){console.log("ngAfterContentInit")}
  // ngAfterContentChecked(){console.log("ngAfterContentChecked")}
  // ngAfterViewInit(){console.log("ngAfterViewInit")}
  // ngAfterViewChecked(){console.log("ngAfterViewChecked")}
  // ngOnDestroy(){console.log("ngOnDestroy")}
  
  

}

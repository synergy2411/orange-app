import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  filteredStatus = "";
  
  onAddTodo(){
    this.todos.push({label : "New Work", status : "pending"});
  }
  todos = [{
    label : "Some Work",
    status : "done"
  },{
    label : "Some Work",
    status : "done"
  },{
    label : "New Work",
    status : "pending"
  },{
    label : "New Work",
    status : "pending"
  }]

  contact_no : number = 98765321; 

  data = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Here the data comes...");
    }, 5000)
  })

  constructor() { }

  ngOnInit() {
  }

}

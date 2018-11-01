import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  product_id : number;
  product_name : string;
  name : string;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.product_id = +this.route.snapshot.params['id'];
    // this.product_name = this.route.snapshot.params['name'];
    this.route.params.subscribe(params=>{
      this.product_name = params['name'];
    });
    this.route.queryParams.subscribe(queryParams=>{
      this.name = queryParams['name'];
    })
  }

}

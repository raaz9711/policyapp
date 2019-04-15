import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
// import {User}
import { User } from './../user';
@Component({
  selector: 'app-carinsurance',
  templateUrl: './carinsurance.component.html',
  styleUrls: ['./carinsurance.component.css']
})
export class CarinsuranceComponent implements OnInit {

  alldata: User[]; 
  constructor( private dservice: DataService ) { }

  ngOnInit() {
    
    this.dservice.getdetailviaapi().subscribe(
      alldata => this.alldata = alldata
      
    );
  }

}
  
import { Component, OnInit } from '@angular/core';
import {ApiService} from '../app/api.service';
import { Policy } from 'src/app/policy';


@Component({
  selector: 'app-termpolicy',
  templateUrl: './termpolicy.component.html',
  styleUrls: ['./termpolicy.component.css']
})
export class TermpolicyComponent implements OnInit {
policies :Policy[];
// selectedPolicy:Policy=  { id :  null , name: null,number:null, amount:  null};

  constructor(private apiservice:ApiService) { }

  ngOnInit() {

    this.apiservice.readPolicies().subscribe((policies: Policy[])=>{
      this.policies = policies;
      console.log(this.policies);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../app/loginservice.service'
import { Loginaccess } from 'src/app/loginaccess';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  Users:Loginaccess[];

  constructor(private loginservice:LoginserviceService) { }

  ngOnInit() {

    this.loginservice.finduser().subscribe((Users:Loginaccess[])=>{
      this.Users = Users;
      // console.log(this.Users);
    })
  }

  clk(){
    console.log(this.Users);
    console.log(this.Users[0].email=="RAAZ.KUMAR015@GMAIL.COM")
    console.log(this.Users[0].password=="7854CDSDS")

    // console.log(this.emailid);
    // this.emailid.setValue

    if(this.Users[0].email=="RAAZ.KUMAR015@GMAIL.COM"&&this.Users[0].password=="7854CDSDS"){
      return true;
    }
  }

}

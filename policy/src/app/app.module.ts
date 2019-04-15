import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from '../nav/nav.component';
import { LifeinsuranceComponent } from '../lifeinsurance/lifeinsurance.component';
import { HealthInsuranceComponent } from '../health-insurance/health-insurance.component';
import { MotorComponent } from '../motor/motor.component';
import { AboutComponent } from '../about/about.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { RouterModule } from '@angular/router';
import { FrontpageComponent } from '../frontpage/frontpage.component';
import { TermpolicyComponent } from '../termpolicy/termpolicy.component';
import { HealthplanComponent } from '../healthplan/healthplan.component';
import { CarinsuranceComponent } from './carinsurance/carinsurance.component';
import { LifepageComponent } from '../lifepage/lifepage.component';
import { HealthpageComponent } from '../healthpage/healthpage.component';
import { MotorpageComponent } from '../motorpage/motorpage.component';
import { CarousalComponent } from '../carousal/carousal.component';
import {DataService} from './data.service';
import { PaymentComponent } from './payment/payment.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LifeinsuranceComponent,
    HealthInsuranceComponent,
    MotorComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    FrontpageComponent,
    TermpolicyComponent,
    HealthplanComponent,
    CarinsuranceComponent,
    LifepageComponent,
    HealthpageComponent,
    MotorpageComponent,
    CarousalComponent,
    PaymentComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RouterModule.forRoot([
    //  { path : 'signup' , component : SignupComponent},
    //   {path: 'login' , component : LoginComponent}
    // ]),
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

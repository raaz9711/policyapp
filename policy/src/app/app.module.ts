import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from '../nav/nav.component';
import { LifeinsuranceComponent } from '../lifeinsurance/lifeinsurance.component';
import { HealthInsuranceComponent } from '../health-insurance/health-insurance.component';
import { MotorComponent } from '../motor/motor.component';
import { AboutComponent } from 'src/app/about/about.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { RouterModule } from '@angular/router';
import { FrontpageComponent } from '../frontpage/frontpage.component';
import { TermpolicyComponent } from '../termpolicy/termpolicy.component';
import { HealthplanComponent } from '../healthplan/healthplan.component';
import { CarinsuranceComponent } from '../carinsurance/carinsurance.component';
import { LifepageComponent } from '../lifepage/lifepage.component';
import { HealthpageComponent } from '../healthpage/healthpage.component';
import { MotorpageComponent } from '../motorpage/motorpage.component';
import { CarousalComponent } from '../carousal/carousal.component';
// import { HttpClient } from 'selenium-webdriver/http';


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
    CarousalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
     { path : 'signup' , component : SignupComponent},
      {path: 'login' , component : LoginComponent}
    ]),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

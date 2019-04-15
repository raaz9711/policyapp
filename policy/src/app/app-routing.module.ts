import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { FrontpageComponent } from '../frontpage/frontpage.component';
import {NavComponent} from '../nav/nav.component';
import { TermpolicyComponent } from 'src/termpolicy/termpolicy.component';
import { HealthplanComponent } from 'src/healthplan/healthplan.component';
import { CarinsuranceComponent } from './carinsurance/carinsurance.component';
import { MotorpageComponent } from 'src/motorpage/motorpage.component';
import { LifepageComponent } from 'src/lifepage/lifepage.component';
import { HealthpageComponent } from 'src/healthpage/healthpage.component';
import { AboutComponent } from 'src/about/about.component';
import{PaymentComponent} from './payment/payment.component'
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [
  // {path: '' , redirectTo  : 'SignupComponent', pathMatch : 'full' },
{path: 'signup' , component: SignupComponent},
{path: 'login', component: LoginComponent},
{path: 'home', component: FrontpageComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path: 'termpolicy' , component: TermpolicyComponent},
{path: 'healthplan', component: HealthplanComponent},
{path : 'carinsurance', component: CarinsuranceComponent},
{path : 'motorpage', component: MotorpageComponent},
{path : 'lifeinsurance' , component: LifepageComponent},
{path : 'healthinsurance', component: HealthpageComponent},
{path : 'about', component: AboutComponent},
{path:'payment', component: PaymentComponent},

{path:'**',component:NotfoundComponent},
{
  path:'login',component: LoginComponent,

  children:[
    {
      path:'signup',component:SignupComponent
    }
  ]
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //import { PaymentComponent } from './payment/payment.component';
exports: [RouterModule]
})

export class AppRoutingModule { }

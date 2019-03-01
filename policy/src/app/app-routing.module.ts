import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { FrontpageComponent } from '../frontpage/frontpage.component';
import {NavComponent} from '../nav/nav.component';
import { TermpolicyComponent } from 'src/termpolicy/termpolicy.component';
import { HealthplanComponent } from 'src/healthplan/healthplan.component';
import { CarinsuranceComponent } from 'src/carinsurance/carinsurance.component';
import { MotorpageComponent } from 'src/motorpage/motorpage.component';
import { LifepageComponent } from 'src/lifepage/lifepage.component';
import { HealthpageComponent } from 'src/healthpage/healthpage.component';
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
{path : 'healthinsurance', component: HealthpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

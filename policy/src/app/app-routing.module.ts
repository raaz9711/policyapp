import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { FrontpageComponent } from '../frontpage/frontpage.component';
import {NavComponent} from '../nav/nav.component';
import { TermpolicyComponent } from 'src/termpolicy/termpolicy.component';
import { HealthplanComponent } from 'src/healthplan/healthplan.component';
import { CarinsuranceComponent } from 'src/carinsurance/carinsurance.component';

const routes: Routes = [
  // {path: '' , redirectTo  : 'SignupComponent', pathMatch : 'full' },
{path: 'signup' , component: SignupComponent},
{path: 'login', component: LoginComponent},
{path: 'home', component: FrontpageComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path: 'termpolicy' , component: TermpolicyComponent},
{path: 'healthplan', component: HealthplanComponent},
{path : 'carinsurance', component: CarinsuranceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

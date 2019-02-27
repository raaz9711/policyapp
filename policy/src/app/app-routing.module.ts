import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // {path: '' , redirectTo  : 'SignupComponent', pathMatch : 'full' },
{path: 'signup' , redirectTo : 'SignupComponent'  },
{path: 'login', component: LoginComponent},
// { path: 'localhost:4200/login', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

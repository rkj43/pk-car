import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { Home2Component } from './home2/home2.component';


const routes: Routes = [
  {path: '',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'home2',component:Home2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true}), CommonModule],
  exports: [RouterModule]
  ,
})
export class AppRoutingModule { }

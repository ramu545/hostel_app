import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FloorsComponent } from './floors/floors.component';
import { TanentsComponent } from './tanents/tanents.component';
import { AddnewComponent } from './addnew/addnew.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path : 'dashboard', component: DashboardComponent,
  // children: [
  //   {
  //     path: 'addfloors',
  //     component: FloorsComponent 
  // },
  // ]
  },
  { path: 'tanents', component: TanentsComponent },
  { path: 'addnew',component: AddnewComponent },
  { path: 'LogOut',redirectTo: '/home',pathMatch: 'full'},
  { path: '**', component:  PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }

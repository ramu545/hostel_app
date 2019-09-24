import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { FloorsComponent } from './floors/floors.component';
import { TanentsComponent } from './tanents/tanents.component';
import { AddnewComponent } from './addnew/addnew.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    RegisterComponent,
    FloorsComponent,
    TanentsComponent,
    AddnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

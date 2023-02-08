import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AppWebComponent } from './app-web/app-web.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    AppWebComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }

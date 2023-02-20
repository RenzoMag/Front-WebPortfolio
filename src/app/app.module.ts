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
import { CrudEditComponent } from './crud-edit/crud-edit.component';
import { AngularFireModule } from "@angular/fire/compat"
import { environments } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    AppWebComponent,
    RegisterComponent,
    CrudEditComponent,
    SpinnerComponent,
    DashboardComponent,
    VerificarCorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    AngularFireModule.initializeApp(environments.firebaseConfig),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }

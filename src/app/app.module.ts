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
import { AngularFireModule } from '@angular/fire/compat';
import { environments } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import { HttpClientModule } from '@angular/common/http';
import { EditIconComponent } from './shared/edit-icon/edit-icon.component';
import { EditIconInputComponent } from './shared/edit-icon-input/edit-icon-input.component';
import { IconsEditCancelComponent } from './shared/icons-edit-cancel/icons-edit-cancel.component';
import { IconsEditDoneComponent } from './shared/icons-edit-done/icons-edit-done.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    AppWebComponent,
    RegisterComponent,
    SpinnerComponent,
    DashboardComponent,
    VerificarCorreoComponent,
    EditIconComponent,
    EditIconInputComponent,
    IconsEditCancelComponent,
    IconsEditDoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    AngularFireModule.initializeApp(environments.firebaseConfig),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [HomeComponent],
})
export class AppModule {}

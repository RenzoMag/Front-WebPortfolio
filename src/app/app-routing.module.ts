import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWebComponent } from './app-web/app-web.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "CrudEdit", component: CrudEditComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "verificar", component: VerificarCorreoComponent },
  { path: "home", component: AppWebComponent },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

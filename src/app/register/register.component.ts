import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { alertaokgi } from '../../assets/JS/alerta.js';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  dataUser: any
  loading: boolean = false;

  barenter(bar: HTMLElement, bar2: HTMLElement, forgc: HTMLElement) {
    bar.style.translate = "0px"
    bar2.style.translate = "0px"
    forgc.style.backgroundColor = "rgb(41 127 239 / 20%)"
  }

  barout(bar: HTMLElement, bar2: HTMLElement, forgc: HTMLElement) {
    bar.style.translate = "-300px"
    bar2.style.translate = "300px"
    forgc.style.backgroundColor = "transparent"
  }

  registrarUsuario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router
    ) {
    this.registrarUsuario = this.fb.group({
      Nombre: ["", Validators.required],
      Apellido: ["", Validators.required],
      Email: ["", [Validators.required, Validators.email]],
      Password: ["", [Validators.required, Validators.minLength(6)]],
      RepetirPassword: ["", Validators.required],
    })
  }

  registrar() {
    const Nombre = this.registrarUsuario.value.Nombre
    const Apellido = this.registrarUsuario.value.Apellido
    const Email = this.registrarUsuario.value.Email
    const Password = this.registrarUsuario.value.Password
    const RepetirPassword = this.registrarUsuario.value.RepetirPassword

    if (Password !== RepetirPassword) {
      alertaokgi("Las contraseñas ingresadas deben ser iguales!", "error", 4000)
      return
    }

    this.loading = true;
    this.afAuth
      .createUserWithEmailAndPassword(Email, Password)
      .then(() => {
        console.log(this.registrarUsuario)
        this.VerificarCorreo();
      })
      .catch((error) => {
        this.loading = false;
        alertaokgi(this.firebaseError(error.code), "error", 4000)
      })
  }

  firebaseError(code: string) {

    switch (code) {
      case "auth/email-already-in-use":
        return "El usuario ya existe";

      case "auth/weak-password":
        return "La contraseña es muy debil";

      case "auth/invalid-email":
        return "Correo invalido";

      default:
        return "Error desconocido"
    }
  }

  VerificarCorreo(){
    this.afAuth.currentUser.then(user => user?.sendEmailVerification())
    .then(() =>{
      alertaokgi("Le hemos enviado un mail de verificación", "info", 5000)
      this.router.navigate(["/login"]);
    });
  }
}

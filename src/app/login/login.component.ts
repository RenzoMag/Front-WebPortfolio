import { Component, OnInit } from '@angular/core';
import { getAuth, setPersistence, signInWithEmailAndPassword, browserLocalPersistence, browserSessionPersistence, inMemoryPersistence } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { alertaokgi } from '../../assets/JS/alerta.js';
import * as firebase from 'firebase/compat';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        this.router.navigate(["/home"])
      }
    });
  }

  barenter(bar: HTMLElement, bar2: HTMLElement, forgc: HTMLElement){
    bar.style.translate = "0px"
    bar2.style.translate = "0px"
    forgc.style.backgroundColor = "rgb(41 127 239 / 20%)"
  }

  barout(bar: HTMLElement, bar2: HTMLElement, forgc: HTMLElement){
    bar.style.translate = "-300px"
    bar2.style.translate = "300px"
    forgc.style.backgroundColor = "transparent"
  }

  loginUsuario: FormGroup;
  loading: boolean = false;

  constructor (
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router
    ){

    this.loginUsuario = this.fb.group({
      Email: ["", [Validators.required, Validators.email]],
      Password: ["", Validators.required],
    })
  }

  login(){
    const Email = this.loginUsuario.value.Email;
    const Password = this.loginUsuario.value.Password;

    this.loading = true;

    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence).then(() =>{
      this.afAuth.signInWithEmailAndPassword(Email, Password).then((user) => {
        if (user.user?.emailVerified) {
          this.router.navigate(["/dashboard"])
        } else {
          this.router.navigate(["/verificar"])
        }

      }).catch((error) => {
        this.loading = false;
        alertaokgi(this.firebaseError(error.code), "error", 4000)
      })
    })
  }

  firebaseError(code: string) {

    switch (code) {
      case "auth/user-not-found":
        return "El usuario no existe";

      case "auth/wrong-password":
        return "Constraseña Incorrecta";

      case "auth/invalid-email":
        return "Debe ingresar un usuario";

      case "auth/internal-error":
        return "Debe ingresar una contraseña";

      case "auth/too-many-requests":
          return "Demasiados intentos fallidos. \n Vuelve a intentarlo mas tarde";

      default:
        return "Error desconocido"
    }
  }

}

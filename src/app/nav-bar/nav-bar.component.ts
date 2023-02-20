import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AppWebComponent } from '../app-web/app-web.component';
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  sepin(sepinout: HTMLElement){
    sepinout.style.translate = "0px"
    sepinout.style.transition = "translate 800ms"
  }

  sepout(sepinout: HTMLElement){
    sepinout.style.translate = "-2000px"
    sepinout.style.transition = "translate 3500ms"
  }

  cerrar(modal: HTMLElement){
    modal.style.opacity = "0"
    modal.style.pointerEvents = "none"
  }

  abrir(modal: HTMLElement){
    modal.style.opacity = "1"
    modal.style.pointerEvents = "unset"
  }

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
    ){
  }


  logout(){
    this.afAuth.signOut().then(() => this.router.navigate(["/home"]));
  }

  IsLogIn: boolean = false
  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        this.IsLogIn = true
      } else {
        this.IsLogIn = false
      }
    });
  }
}

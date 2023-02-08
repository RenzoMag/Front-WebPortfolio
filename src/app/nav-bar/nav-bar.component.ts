import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppWebComponent } from '../app-web/app-web.component';

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
}

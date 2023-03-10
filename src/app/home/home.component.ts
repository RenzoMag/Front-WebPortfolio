import { style } from '@angular/animations';
import {  Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ["./home.component.css"]
})
export class HomeComponent{
  myScriptElement: HTMLScriptElement;
  constructor(){
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "./assets/JS/alerta.js";
    document.body.appendChild(this.myScriptElement);
  }
}

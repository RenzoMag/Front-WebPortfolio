import { Component } from '@angular/core';

@Component({
  selector: 'app-app-web',
  templateUrl: './app-web.component.html',
  styleUrls: ['./app-web.component.css']
})
export class AppWebComponent {
  myScriptElement: HTMLScriptElement;
  constructor(){
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "./assets/JS/main.js";
    document.body.appendChild(this.myScriptElement);
  }
}

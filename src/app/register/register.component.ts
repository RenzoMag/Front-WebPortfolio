import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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
}

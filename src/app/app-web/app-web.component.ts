import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { IsEditingService } from 'src/services/is-editing.service';
import { RestApi } from 'src/services/http.service';

@Component({
  selector: 'app-app-web',
  templateUrl: './app-web.component.html',
  styleUrls: ['./app-web.component.css'],
})
export class AppWebComponent implements OnInit {
  IsEditing = false;
  IsEditingBars = [false, false, false, false, false, false, false, false];
  inputLeng: Array<string> = [];
  inputPorc: Array<number> = [];
  myScriptElement: HTMLScriptElement;
  desPerfil: any;

  constructor(private ser: IsEditingService, private RestApi: RestApi) {
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = './assets/JS/main.js';
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {
    this.ser.IsEditing.subscribe((item) => {
      this.IsEditing = item;
    });

    this.RestApi.getTask().subscribe((data) => {
      this.desPerfil = data[9].description;
      this.inputLeng[1] = data[0].title;
      this.inputPorc[1] = data[0].description;
      this.inputLeng[2] = data[1].title;
      this.inputPorc[2] = data[1].description;
      this.inputLeng[3] = data[2].title;
      this.inputPorc[3] = data[2].description;
      this.inputLeng[4] = data[3].title;
      this.inputPorc[4] = data[3].description;
      this.inputLeng[5] = data[4].title;
      this.inputPorc[5] = data[4].description;
      this.inputLeng[6] = data[5].title;
      this.inputPorc[6] = data[5].description;
      this.inputLeng[7] = data[6].title;
      this.inputPorc[7] = data[6].description;
      this.inputLeng[8] = data[7].title;
      this.inputPorc[8] = data[7].description;
    });
  }

  btnedit() {
    this.IsEditing = true;
  }

  btneditbar(num: number) {
    this.IsEditingBars[num] = true;
  }

  btneditclose(num: number) {
    this.IsEditingBars[num] = false;
    location.href = '/home';
  }

  btnsend(num: number) {
    const act = {
      id: `${num}`,
      title: `${this.inputLeng[num]}`,
      description: `${this.inputPorc[num]}`,
    };
    if (this.inputPorc[num] > 100) {
      alert('El numero ingresado debe ser menor o igual a 100');
    } else {
      this.RestApi.updateTask(`${num}`, act).subscribe();
      location.href = '/home';
    }
  }

  imghover(argp: HTMLElement, triang: HTMLElement) {
    argp.style.opacity = '1';
    argp.style.transition = 'all 400ms';
    triang.style.opacity = '1';
    triang.style.transition = 'all 400ms';
  }

  imgdhover(argp: HTMLElement, triang: HTMLElement) {
    argp.style.opacity = '0';
    argp.style.transition = 'all 400ms';
    triang.style.opacity = '0';
    triang.style.transition = 'all 400ms';
  }
}

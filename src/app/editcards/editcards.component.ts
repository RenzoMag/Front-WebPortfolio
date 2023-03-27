import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { RestApi } from 'src/services/http.service';
import { IsEditingService } from 'src/services/is-editing.service';

@Component({
  selector: 'app-editcards',
  templateUrl: './editcards.component.html',
  styleUrls: ['./editcards.component.css'],
})
export class EditcardsComponent {
  IsEditingCard = false;
  Loading: boolean = false;

  data: any = {
    ImageUrl: '',
    TitleUrl: 'https://',
    Title: '',
    Description: '',
    Id: '',
    View: '',
  };

  CurrenId: any = {};

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private RestApi: RestApi,
    private ser: IsEditingService
  ) {}

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if (user?.uid === 'sW69JkjK3UbiHWPtG3xMqldwT8Z2') {
      } else {
        this.router.navigate(['/home']);
      }
    });
    this.ser.IsEditingCard.subscribe((item) => {
      this.IsEditingCard = item;
    });

    this.RestApi.getExp().subscribe((datos: any) => {
      this.data.Id = datos.at(-1).id;
    });

    this.ser.CurrenId.subscribe((item) => {
      this.CurrenId = item;
    });

    if (this.IsEditingCard) {
      this.RestApi.getExp().subscribe((data: any) => {
        this.data.ImageUrl = data[this.CurrenId].url;
        this.data.TitleUrl = data[this.CurrenId].weburl;
        this.data.Description = data[this.CurrenId].description;
        this.data.Title = data[this.CurrenId].title;
        this.data.Id = data[this.CurrenId].id;
        this.data.View = data[this.CurrenId].view;
      });
    }
  }

  async sendData() {
    this.Loading = true;
    const act = {
      id: `${this.data.Id + 1}`,
      title: `${this.data.Title}`,
      description: `${this.data.Description}`,
      url: `${this.data.ImageUrl}`,
      weburl: `${this.data.TitleUrl}`,
      view: true,
    };
    this.RestApi.addExp(act).subscribe({
      next: (data) => {
        this.Loading = false;
        location.href = '/home#ex';
      },
      error: (error) => {
        this.Loading = false;
        location.href = '/home#ex';
      },
    });
  }

  updateData() {
    this.Loading = true;
    const actt = {
      id: `${this.data.Id}`,
      title: `${this.data.Title}`,
      description: `${this.data.Description}`,
      url: `${this.data.ImageUrl}`,
      weburl: `${this.data.TitleUrl}`,
      view: true,
    };
    this.RestApi.updateExp(this.CurrenId, actt).subscribe({
      next: (data) => {
        this.Loading = false;
        location.href = '/home#ex';
      },
      error: (error) => {
        this.Loading = false;
        location.href = '/home#ex';
      },
    });
  }

  cancel() {
    location.href = '/home#ex';
  }
}

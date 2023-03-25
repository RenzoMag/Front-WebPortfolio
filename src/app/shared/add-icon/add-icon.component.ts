import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-icon',
  templateUrl: './add-icon.component.html',
  styleUrls: ['./add-icon.component.css'],
})
export class AddIconComponent {
  constructor(private afAuth: AngularFireAuth) {}

  IsAdmin: boolean = false;
  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if (user?.uid === 'sW69JkjK3UbiHWPtG3xMqldwT8Z2') {
        this.IsAdmin = true;
      } else {
        this.IsAdmin = false;
      }
    });
  }
}

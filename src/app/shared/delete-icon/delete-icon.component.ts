import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-icon',
  templateUrl: './delete-icon.component.html',
  styleUrls: ['./delete-icon.component.css'],
})
export class DeleteIconComponent {
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

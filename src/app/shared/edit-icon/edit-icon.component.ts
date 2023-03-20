import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-icon',
  templateUrl: './edit-icon.component.html',
  styleUrls: ['./edit-icon.component.css'],
})
export class EditIconComponent implements OnInit {
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

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-edit',
  templateUrl: './crud-edit.component.html',
  styleUrls: ['./crud-edit.component.css']
})



export class CrudEditComponent implements OnInit{

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if (user?.uid === "sW69JkjK3UbiHWPtG3xMqldwT8Z2") {
      } else {
        this.router.navigate(["/dashboard"])
      }
    });
  }

  constructor (
    private afAuth: AngularFireAuth,
    private router: Router
    ){}
}

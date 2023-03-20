import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  dataUser: any;
  IsAdmin: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
    ){
  }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        this.dataUser = user;
      } else {
        this.router.navigate(["/login"])
      }
      if (user?.uid === "sW69JkjK3UbiHWPtG3xMqldwT8Z2") {
        this.IsAdmin = true;
      }
    });
  }

  redt(){
    location.href = "/home"
  }

}

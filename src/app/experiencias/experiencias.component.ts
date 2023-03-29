import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RestApi } from 'src/services/http.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { IsEditingService } from 'src/services/is-editing.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css'],
})
export class ExperienciasComponent implements OnInit {
  experiencias: any = [];
  modalact: any = [];
  IsAdmin: boolean = false;
  Loading: boolean = false;

  constructor(
    private RestApi: RestApi,
    private renderer2: Renderer2,
    private afAuth: AngularFireAuth,
    private router: Router,
    private ser: IsEditingService
  ) {}

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if (user?.uid === 'sW69JkjK3UbiHWPtG3xMqldwT8Z2') {
        this.IsAdmin = true;
      } else {
        this.IsAdmin = false;
      }
    });

    this.RestApi.getExp().subscribe((data: any) => {
      this.experiencias = data;
    });
  }

  @ViewChild('a') a!: ElementRef;
  @ViewChild('b') b!: ElementRef;
  btnopen(modal) {
    this.modalact = this.experiencias[modal];

    const a = this.a.nativeElement;
    const b = this.b.nativeElement;
    this.renderer2.addClass(a, 'modal__cointainer_close');
    this.renderer2.setStyle(b, 'position', 'relative');
    this.renderer2.setStyle(b, 'bottom', '0px');
    this.renderer2.setStyle(b, 'transition', 'bottom 450ms');
  }

  btnclose() {
    const a = this.a.nativeElement;
    const b = this.b.nativeElement;
    this.renderer2.removeClass(a, 'modal__cointainer_close');
    this.renderer2.setStyle(b, 'position', 'relative');
    this.renderer2.setStyle(b, 'bottom', '800px');
    this.renderer2.setStyle(b, 'transition', 'bottom 350ms');
  }

  addCard() {
    this.router.navigate(['/editcards']);
  }

  removeCard(id) {
    const actt = {
      id: `${id}`,
      title: `${this.experiencias[id].title}`,
      description: `${this.experiencias[id].description}`,
      url: `${this.experiencias[id].url}`,
      weburl: `${this.experiencias[id].weburl}`,
      view: false,
    };
    this.RestApi.updateExp(id, actt).subscribe({
      next: (data) => {
        this.Loading = false;
        location.href = '/home#ex';
        location.reload();
      },
      error: (error) => {
        this.Loading = false;
        location.href = '/home#ex';
        location.reload();
      },
    });
  }

  editCard(id) {
    this.ser.IsEditingCard.next(true);
    this.ser.CurrenId.next(id);
    this.router.navigate(['/editcards']);
  }
}

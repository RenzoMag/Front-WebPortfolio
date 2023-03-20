import { Component, Input, OnInit } from '@angular/core';
import { AppWebComponent } from 'src/app/app-web/app-web.component';
import { IsEditingService } from 'src/services/is-editing.service';
import { RestApi } from 'src/services/http.service';

@Component({
  selector: 'app-edit-icon-input',
  templateUrl: './edit-icon-input.component.html',
  styleUrls: ['./edit-icon-input.component.css'],
})
export class EditIconInputComponent implements OnInit {
  input: string | undefined;

  constructor(private ser: IsEditingService, private RestApi: RestApi) {}

  ngOnInit(): void {}

  close() {
    this.ser.IsEditing.next(false);
  }

  send() {
    const act = {
      id: 100,
      title: 'Descripcion personal',
      description: `${this.input}`,
    };
    this.RestApi.updateTask('100', act).subscribe();
    this.ser.IsEditing.next(false);
    location.href = '/home';
  }
}

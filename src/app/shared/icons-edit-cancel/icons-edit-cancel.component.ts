import { Component } from '@angular/core';
import { RestApi } from 'src/services/http.service';
import { IsEditingService } from 'src/services/is-editing.service';

@Component({
  selector: 'app-icons-edit-cancel',
  templateUrl: './icons-edit-cancel.component.html',
  styleUrls: ['./icons-edit-cancel.component.css'],
})
export class IconsEditCancelComponent {
  constructor(private ser: IsEditingService, private RestApi: RestApi) {}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsEditingService {
  IsEditing = new BehaviorSubject<boolean>(false);
  constructor() {}
}

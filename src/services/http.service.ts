import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestApi {
  constructor(private http: HttpClient) {}

  getTask() {
    return this.http.get('http://localhost:8080/tasks');
  }

  updateTask(id: any, body: any) {
    return this.http.put(`http://localhost:8080/update/${id}`, body);
  }
}

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

  addTask(body: any) {
    return this.http.post('http://localhost:8080/save', body);
  }

  deleteTask(id: any) {
    return this.http.delete(`http://localhost:8080/delete/${id}`);
  }

  /////////////////////////////////////////////////////////////////////////////

  getExp() {
    return this.http.get('http://localhost:8080/exp');
  }

  updateExp(id: any, body: any) {
    return this.http.put(`http://localhost:8080/update/exp/${id}`, body);
  }

  addExp(body: any) {
    return this.http.post('http://localhost:8080/save/exp', body);
  }

  deleteExp(id: any) {
    return this.http.delete(`http://localhost:8080/delete/exp/${id}`);
  }
}

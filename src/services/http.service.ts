import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestApi {
  constructor(private http: HttpClient) {}

  getTask() {
    return this.http.get('https://webportfolio-aoih.onrender.com/tasks');
  }

  updateTask(id: any, body: any) {
    return this.http.put(
      `https://webportfolio-aoih.onrender.com/update/${id}`,
      body
    );
  }

  addTask(body: any) {
    return this.http.post('https://webportfolio-aoih.onrender.com/save', body);
  }

  deleteTask(id: any) {
    return this.http.delete(
      `https://webportfolio-aoih.onrender.com/delete/${id}`
    );
  }

  /////////////////////////////////////////////////////////////////////////////

  getExp() {
    return this.http.get('https://webportfolio-aoih.onrender.com/exp');
  }

  updateExp(id: any, body: any) {
    return this.http.put(
      `https://webportfolio-aoih.onrender.com/update/exp/${id}`,
      body
    );
  }

  addExp(body: any) {
    return this.http.post(
      'https://webportfolio-aoih.onrender.com/save/exp',
      body
    );
  }

  deleteExp(id: any) {
    return this.http.delete(
      `https://webportfolio-aoih.onrender.com/delete/exp/${id}`
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = '/api/v1/tasks';

  constructor(private http: HttpClient) { }

  addTask(task: Object): Observable<Object> {
   console.log('hello am in task service');
   return null;
   //this.http.post(`${this.baseUrl}`, task);
  }
}

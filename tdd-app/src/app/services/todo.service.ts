import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // private http: HttpClient = inject(HttpClient); // In context
  
  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http:HttpClient) { }

  findAll():Observable<Todo[]>{
    return this.http.get<Todo[]>(environment.url_todos);
  }


  delete(todo:Todo):Observable<void>{
    const url = `${environment.url_todos}/${todo.id}`;
    return this.http.delete<void>(url);

  }

  save(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(environment.url_todos,todo,this.httpOptions);
  }



}

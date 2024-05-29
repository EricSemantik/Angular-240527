import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoHttpService {

  constructor(private http: HttpClient) { 
  }

  findAll(): Observable<Todo[]>{
    let obs: Observable<Todo[]> = this.http.get<Todo[]>("http://localhost:3000/todos");

    return obs;
  }

  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>("http://localhost:3000/todos/"+id);
  }

  save(todo: Todo): Observable<Todo> {
    if(todo.id) {
      return this.http.put<Todo>("http://localhost:3000/todos/"+todo.id, todo);
    } else {
      return this.http.post<Todo>("http://localhost:3000/todos", todo);
    }
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>("http://localhost:3000/todos/"+id); 
  }
}

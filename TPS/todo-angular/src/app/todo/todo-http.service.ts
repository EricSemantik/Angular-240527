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

  findById(id: number) {
    return new Todo();
  }

  save(todo: Todo): void {
   
  }

  deleteById(id: number): void {
    
  }
}

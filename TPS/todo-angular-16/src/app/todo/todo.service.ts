import { Injectable } from '@angular/core';
import { Todo } from '../model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = new Array<Todo>();

  constructor() {
    this.todos.push(new Todo(5, "Ménage", true, false, 4));
    this.todos.push(new Todo(55, "Vaisselle", false, true, 4));
    this.todos.push(new Todo(15, "Repassage", true, false, 4));
    this.todos.push(new Todo(45, "Course de Noël", false, false, 5));
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findById(id: number): Todo | undefined {
    return this.todos.find(t => t.id == id);
  }

  save(todo: Todo): void {
    if(todo.id) {
      let position = this.todos.findIndex(t => t.id == todo.id);

      this.todos[position] = todo;
    } else { 
      let max = 0;
    
      this.todos.forEach(t => {
        if(t.id && t.id > max) 
          max = t.id;
      });

      todo.id = ++max;

      this.todos.push(todo);
    }
  }

  deleteById(id: number) {
    let position = this.todos.findIndex(t => t.id == id);

    this.todos.splice(position, 1);
  }
}

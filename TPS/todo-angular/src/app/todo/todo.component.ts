import { Component } from '@angular/core';
import { Todo } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos: Todo[] = new Array<Todo>();

  constructor() {
    this.todos.push(new Todo(5, "Ménage", true, false, 4));
    this.todos.push(new Todo(55, "Vaisselle", false, true, 4));
    this.todos.push(new Todo(15, "Repassage", true, false, 4));
    this.todos.push(new Todo(45, "Course de Noël", false, false, 5));
  }
}

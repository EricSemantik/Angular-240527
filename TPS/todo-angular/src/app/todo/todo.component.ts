import { Component } from '@angular/core';
import { Todo } from '../model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  constructor(private todoService: TodoService) {
  }

  list(): Todo[] {
    return this.todoService.findAll();
  }
}

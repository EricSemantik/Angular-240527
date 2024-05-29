import { Component, OnDestroy, OnInit } from '@angular/core';
import { List, Todo } from '../model';
import { TodoService } from './todo.service';
import { TodoHttpService } from './todo-http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit, OnDestroy {
  todoForm: Todo | undefined;

  todos!: Todo[];
  todosSubscription!: Subscription;

  constructor(private todoService: TodoHttpService) {
  }

  ngOnInit(): void {
    this.todosSubscription = this.todoService.findAll().subscribe((resp) => {
      this.todos = resp;
    });
  }
  
  ngOnDestroy(): void {
    this.todosSubscription.unsubscribe();
  }
    

  list(): Todo[] {
    return this.todos;
  }

  add() {
    this.todoForm = new Todo();
  }

  edit(id?: number) {
    // A faire
  }

  save() {
    // A faire
  }

  remove(id?: number) {
    // A faire
  }

  cancel() {
    this.todoForm = undefined;
  }

  listLists(): List[] {
    // A faire
    return new Array<List>();
  }

  findListById(id?: number): List | undefined {
    

    return undefined;
  }
}

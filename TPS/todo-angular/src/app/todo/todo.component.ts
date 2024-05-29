import { Component, OnDestroy, OnInit } from '@angular/core';
import { List, Todo } from '../model';
import { TodoService } from './todo.service';
import { TodoHttpService } from './todo-http.service';
import { Observable, Subscription } from 'rxjs';
import { ListHttpService } from '../list/list-http.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todoForm: Todo | undefined;

  todos!: Todo[];
  todosSubscription!: Subscription;

  constructor(private todoService: TodoHttpService, private listService: ListHttpService) {
  }

  ngOnInit(): void {
   this.load();
  }
  
  load()  {
    this.todosSubscription = this.todoService.findAll().subscribe((resp) => {
      this.todos = resp;
    });
  }

  list(): Todo[] {
    return this.todos;
  }

  add() {
    this.todoForm = new Todo();
  }

  edit(id?: number) {
    if(id)
      this.todoService.findById(id).subscribe(resp => this.todoForm = resp);
  }

  save() {
    if(this.todoForm)
      this.todoService.save(this.todoForm).subscribe(() => {
        this.load();
    });

    this.cancel();
  }

  remove(id?: number) {
    if(id)
      this.todoService.deleteById(id).subscribe(() => {
        this.load();
      });
  }

  cancel() {
    this.todoForm = undefined;
  }

  listLists(): List[] {
    return this.listService.findAll();
  }

}

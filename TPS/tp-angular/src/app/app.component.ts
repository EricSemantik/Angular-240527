import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  prenom: string = 'Eric';
  couleur: string = "#0000FF";

  recherche: string = "";

  todo: Todo = new Todo();

  todos: Array<Todo> = new Array<Todo>();

  todoForm: Todo = new Todo();

  constructor() {
    this.todos.push(new Todo(2, "Etendre le linge", false, 1));
    this.todos.push(new Todo(4, "Passer la tondeuse", false, 3));
    this.todos.push(new Todo(5, "Régler la chaudière", true, 3));
  }

  resetPrenom() {
    this.prenom  = "";
  }

  changePrenom(evt: string) {
    this.prenom = evt.toUpperCase();
  }

  ajouterTodo() {
    if(this.todoForm.id && this.todoForm.title) {
      this.todos.push(this.todoForm);
      this.todoForm = new Todo();
    }
  }


  search(): Todo[] {
    if(this.recherche) {
      return this.todos.filter(todo => todo.title?.indexOf(this.recherche) != -1);
    } 

    return this.todos;
  }
}

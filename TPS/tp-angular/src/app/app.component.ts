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

  todo: Todo = new Todo();

  resetPrenom() {
    this.prenom  = "";
  }

  changePrenom(evt: string) {
    this.prenom = evt.toUpperCase();
  }

}

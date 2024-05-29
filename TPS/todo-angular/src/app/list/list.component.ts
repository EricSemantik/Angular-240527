import { Component } from '@angular/core';
import { List } from '../model';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  constructor(private listService: ListService) {
  }

  list(): List[] {
    return this.listService.findAll();
  }
}

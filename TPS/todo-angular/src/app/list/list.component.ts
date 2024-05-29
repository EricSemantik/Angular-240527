import { Component } from '@angular/core';
import { List, User } from '../model';
import { ListService } from './list.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  listForm: List | undefined;

  constructor(private listService: ListService, private userService: UserService) {
  }

  list(): List[] {
    return this.listService.findAll();
  }

  add() {
    this.listForm = new List();
  }

  edit(id?: number) {
    if(id) 
      this.listForm = {...this.listService.findById(id)};
  }

  save() {
    if(this.listForm) {
      this.listService.save(this.listForm);
    }

    this.cancel();
  }

  remove(id?: number) {
    if(id) 
      this.listService.deleteById(id);
  }

  cancel() {
    this.listForm = undefined;
  }

  listUsers(): User[] {
    return this.userService.findAll();
  }

  findUserById(id?: number): User | undefined {
    if(id)
      return this.userService.findById(id);

    return undefined;
  }
}

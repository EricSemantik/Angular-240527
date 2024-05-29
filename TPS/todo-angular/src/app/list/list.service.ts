import { Injectable } from '@angular/core';
import { List } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private lists: List[] = new Array<List>();
  
  constructor() {
    this.lists.push(new List(4, "Tâches ménagères", 3));
    this.lists.push(new List(5, "Liste de Noël", 3));
    this.lists.push(new List(8, "Liste de Mariage", 8));
  }

  findAll(): List[] {
    return this.lists;
  }

  findById(id: number): List | undefined {
    return this.lists.find(l => l.id == id);
  }

  save(list: List): void {
    if(list.id) {
      let position = this.lists.findIndex(l => l.id == list.id);

      this.lists[position] = list;
    } else { 
      let max = 0;
    
      this.lists.forEach(l => {
        if(l.id && l.id > max) 
          max = l.id;
      });

      list.id = ++max;

      this.lists.push(list);
    }
  }

  deleteById(id: number) {
    let position = this.lists.findIndex(l => l.id == id);

    this.lists.splice(position, 1);
  }
}

import { Injectable } from '@angular/core';
import { List } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListHttpService {

  lists!: List[];

  constructor(private http: HttpClient) { 
    this.load();
  }

  findAll(): List[] {
    return this.lists;
  }

  findById(id: number): Observable<List> {
    return this.http.get<List>("http://localhost:3000/lists/"+id);
  }

  save(list: List): void {
    if(list.id) {
      this.http.put<List>("http://localhost:3000/lists/"+list.id, list).subscribe(() => this.load());
    } else {
      this.http.post<List>("http://localhost:3000/lists", list).subscribe(() => this.load());
    }
  }

  deleteById(id: number): void {
    this.http.delete<void>("http://localhost:3000/lists/"+id).subscribe(() => this.load());
  }

  load() {
    let obs: Observable<List[]> = this.http.get<List[]>("http://localhost:3000/lists");

    obs.subscribe(resp => this.lists = resp);
  }
}

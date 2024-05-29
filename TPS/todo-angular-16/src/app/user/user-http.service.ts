import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private http: HttpClient) { 
  }

  findAll(): Observable<User[]>{
    return this.http.get<User[]>("http://localhost:3000/users");
  }

  findById(id: number) {
    return new User();
  }

  save(user: User): void {
   
  }

  deleteById(id: number): void {
    
  }
}

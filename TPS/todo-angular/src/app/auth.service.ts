import { Injectable } from '@angular/core';
import { User } from './model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user : User | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    this.http.get<User[]>(environment.apiUrl+"/users").subscribe(resp => {
      for(let u of resp) {
        if(u.login == username && u.password == password) {
          this.user = u;
          this.router.navigate(["/home"]);
          break;
        }
      }
    });
  }

  logout() {
    this.user = undefined;
  }

  isLogged(): boolean {
    return this.user != undefined;
  }

  getUser(): User | undefined {
    return this.user;
  }
}

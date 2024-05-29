import { Injectable } from '@angular/core';
import { User } from '../model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User> = new Array<User>();

  constructor() {
    this.users.push(new User(3, "Samy", "JILALI", "samy", "123456"));
    this.users.push(new User(5, "Christophe", "ROUBERTIE", "christophe", "123456"));
    this.users.push(new User(8, "Rudy", "ANDRE", "rudy", "123456"));
    this.users.push(new User(9, "Stéphane", "NGUYEN", "stephane", "123456"));
    this.users.push(new User(11, "Eric", "SULTAN", "eric", "123456"));
  }

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User | undefined {
    return this.users.find(u => u.id == id);
  }

  save(user: User): void {
    if(user.id) {
      let position = this.users.findIndex(u => u.id == user.id);

      this.users[position] = user;
    } else { 
      let max = 0;
    
      this.users.forEach(u => {
        if(u.id && u.id > max) 
          max = u.id;
      });

      user.id = ++max;

      this.users.push(user);
    }
  }

  deleteById(id: number) {
    let position = this.users.findIndex(t => t.id == id);

    this.users.splice(position, 1);
  }
}

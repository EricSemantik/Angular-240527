import { Component, OnInit } from '@angular/core';
import { UserHttpService } from './user-http.service';
import { Observable } from 'rxjs';
import { User } from '../model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users$! : Observable<User[]>;

  constructor(private userService: UserHttpService) {

  }

  ngOnInit(): void {
    this.users$ = this.userService.findAll();
  }

}

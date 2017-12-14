import { Component, OnInit } from '@angular/core';
import { User } from './../user.interface';
import { UserService } from './../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: Array<User>;

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers();
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { ShowUsersService } from '../service/show-users.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  users: User[] = [];
  selectedUser: User | undefined;

  constructor(private showUsersService: ShowUsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.showUsersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  userSelected(user: User): void {
    this.selectedUser = user;
  }

}

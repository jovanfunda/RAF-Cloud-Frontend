import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { PermissionService } from '../service/permission.service';
import { ShowUsersService } from '../service/show-users.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  users: User[] = [];
  selectedUser: User | undefined;
  realEmail: string | undefined;

  constructor(private showUsersService: ShowUsersService, private permissionService: PermissionService) { }

  ngOnInit(): void {
    this.getUsers();
    this.checkPermission("CAN_UPDATE_USERS");
    this.checkPermission("CAN_DELETE_USERS");
  }

  getUsers(): void {
    this.showUsersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  userSelected(user: User): void {
    this.selectedUser = user;
  }

  deleteUser(user: User): void {
    this.showUsersService.deleteUser(user.email!).subscribe(() => {
      this.getUsers();
    })
  }

  checkPermission(permission: string): void {
    this.permissionService.checkPermission(permission).subscribe((hasPermission) => {
      if(document.readyState === "complete") {
        this.hideAndShowButtons(hasPermission, permission);
      } else {
        setTimeout(() => {}, 100);
        this.hideAndShowButtons(hasPermission, permission);
      }
    })
  }

  hideAndShowButtons(hasPermission: string, permission: string): void {
    if(hasPermission) {
      for(let item of document.getElementsByName(permission)) {
        (item! as HTMLButtonElement).hidden = false;
        console.log("{}", item!);
      }
    } else {
      for(let item of document.getElementsByName(permission)) {
        (item! as HTMLButtonElement).hidden = true;
      }
    }
  }
}

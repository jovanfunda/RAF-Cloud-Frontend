import { AfterViewInit, Component } from '@angular/core';
import { Permission } from '../classes/permission';
import { User } from '../classes/user';
import { PermissionService } from '../service/permission.service';
import { ShowUsersService } from '../service/show-users.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements AfterViewInit {

  users: User[] = [];
  selectedUser: User | undefined;
  realEmail: string | undefined;

  constructor(private showUsersService: ShowUsersService, private permissionService: PermissionService) { }

  ngAfterViewInit(): void {
    this.getUsers();
    this.checkPermission(Permission.CAN_UPDATE_USERS);
    this.checkPermission(Permission.CAN_DELETE_USERS);
  }

  getUsers(): void {
    this.showUsersService.getUsers().subscribe((users) => {
      this.users = users;
    })
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
        this.hideAndShowButtons(hasPermission, permission);
    })
  }

  hideAndShowButtons(hasPermission: string, permission: string): void {
    if(hasPermission) {
      for(let item of document.getElementsByName(permission)) {
        (item! as HTMLButtonElement).hidden = false;
      }
    }
  }
}

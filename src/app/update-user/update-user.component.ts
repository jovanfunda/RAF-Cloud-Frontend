import { Component, OnInit, Input, OnChanges, AfterContentChecked, DoCheck } from '@angular/core';
import { User } from '../classes/user';
import { UpdateUserService } from '../service/update-user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})

export class UpdateUserComponent implements OnChanges {

  permissions_s = "";
  permissions: string[] = []

  @Input() user: User;
  password: string = "";
  tempUser: User = {
    email: undefined,
    name: undefined,
    lastname: undefined,
    password: undefined,
    permissions: undefined
  }

  constructor(private updateUserService: UpdateUserService) {
  }

  ngOnChanges() {
    if(this.user != undefined) {
      this.tempUser = this.user;
      this.permissions_s = this.user.permissions.join(",");
    }
  }

  updateUser(){
    if(this.permissions_s.length != 0) 
      this.permissions = this.permissions_s.split(",");
    this.tempUser.permissions = this.permissions;
    this.updateUserService.updateUser(this.user!.email!, this.tempUser!, this.password).subscribe()
  }
}
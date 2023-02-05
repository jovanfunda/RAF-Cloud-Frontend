import { Component, OnInit, Input, OnChanges, AfterContentChecked, DoCheck } from '@angular/core';
import { User } from '../classes/user';
import { UpdateUserService } from '../service/update-user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})

export class UpdateUserComponent implements OnChanges {

  permissions: string[] = []
  values = ['CAN_CREATE_USERS', 'CAN_READ_USERS', 'CAN_UPDATE_USERS', 'CAN_DELETE_USERS', 'CAN_SEARCH_MACHINES', 'CAN_START_MACHINES', 'CAN_STOP_MACHINES', 'CAN_RESTART_MACHINES', 'CAN_CREATE_MACHINES', 'CAN_DESTROY_MACHINES'];


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
      this.permissions = this.user.permissions;
    }
  }

  updateUser(){
    this.tempUser.permissions = this.permissions;
    this.updateUserService.updateUser(this.user!.email!, this.tempUser!, this.password).subscribe()
  }
}
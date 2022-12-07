import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/user';
import { UpdateUserService } from '../service/update-user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})

export class UpdateUserComponent implements OnInit {

  permissions_s = "";
  permissions: string[] = []

  @Input() user?: User;
  password: string = "";
  tempUser: User = {
    email: undefined,
    name: undefined,
    lastname: undefined,
    password: undefined,
    permissions: undefined,
    JWT: undefined
  }

  constructor(private updateUserService: UpdateUserService) {
  }

  ngOnInit(): void {
  
  }

  updateUser() {
    if(this.permissions_s.length != 0) 
      this.permissions = this.permissions_s.split(",");
    this.tempUser.permissions = this.permissions;
    console.log("Permisije ", this.tempUser.permissions);
    this.updateUserService.updateUser(this.user!.email!, this.tempUser!, this.password).subscribe(() => {
    })
  }
}
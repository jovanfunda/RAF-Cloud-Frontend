import { Component, OnInit } from '@angular/core';
import { AddUserService } from '../service/add-user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  name = "";
  lastname = "";
  email = "";
  permissions_s = "";
  permissions: String[] = []

  htmlToAdd = "";

  constructor(private addUserService: AddUserService) { }

  ngOnInit(): void {
  }

  addUser(): void {
    if(this.hasBlankFields()) {
      this.htmlToAdd = '<p>Only permissions field can be empty.</p>';
      return;
    }
    if(this.invalidateEmail(this.email)) {
      this.htmlToAdd = '<p>Invalidate email address</p>';
      return;
    }

    if(this.permissions_s.length != 0) 
      this.permissions = this.permissions_s.split(",");
    
    this.addUserService.addUser(this.name, this.lastname, this.email, this.permissions).subscribe((successfullyAdded) => {
      if (successfullyAdded == null) {
        this.htmlToAdd = '<p>User not created!</p>';
      } else {
        this.htmlToAdd = '<p>User successfully created!</p>';
      }
    })
  }

  hasBlankFields(): boolean {
    return (this.name == "" || this.lastname == "" || this.email == "");
  }

  invalidateEmail(email: string): boolean {
    var re = /\S+@\S+\.\S+/;
    return !re.test(email);
  }
}
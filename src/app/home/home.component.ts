import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.checkAllPermissions()
  }

  checkAllPermissions(): void {
    this.checkJWToken("CAN_CREATE_USERS");
    this.checkJWToken("CAN_READ_USERS");
    this.checkJWToken("CAN_UPDATE_USERS");
    this.checkJWToken("CAN_DELETE_USERS");
  }

  checkJWToken(permission: string): void {
    this.homeService.checkJWToken(permission).subscribe((hasPermission) => {
      if(hasPermission) {
        document.getElementById(permission)!.hidden = false
      } else {
        document.getElementById(permission)!.hidden = true
      }
    })
  }
}

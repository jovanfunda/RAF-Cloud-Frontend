import { Component, OnInit } from '@angular/core';
import { PermissionService } from '../service/permission.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private permissionService: PermissionService) { }

  ngOnInit(): void {
    this.checkAllPermissions()
  }

  checkAllPermissions(): void {
    this.checkJWToken("CAN_CREATE_USERS");
    this.checkJWToken("CAN_READ_USERS");
    this.checkJWToken("CAN_SEARCH_MACHINES");
    this.checkJWToken("CAN_CREATE_MACHINES");
  }

  checkJWToken(permission: string): void {
    this.permissionService.checkPermission(permission).subscribe((hasPermission) => {
      if(hasPermission) {
        document.getElementById(permission)!.hidden = false
      } else {
        document.getElementById(permission)!.hidden = true
      }
    })
  }

  clearJWT(): void {
    localStorage.removeItem("JWToken");
  }
}

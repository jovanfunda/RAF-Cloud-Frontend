import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PermissionService } from '../service/permission.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

  constructor(private permissionService: PermissionService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let retValue = false;
    let permission = route.data['permission'] as string;
    return new Promise(resolve=>{this.permissionService.checkPermission(permission).pipe().subscribe((hasPermission) => {
      retValue = hasPermission;
      resolve(hasPermission);
      })
    })
  }
}

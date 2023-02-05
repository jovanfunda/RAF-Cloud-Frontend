import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { PermissionGuard } from './guard/permission.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "showUsers", component: ShowUsersComponent, canActivate: [PermissionGuard], data: {permission: 'CAN_READ_USERS'}  },
  { path: "addUser", component: AddUserComponent, canActivate: [PermissionGuard], data: {permission: 'CAN_CREATE_USERS'}  },
  // { path: "addUser", component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

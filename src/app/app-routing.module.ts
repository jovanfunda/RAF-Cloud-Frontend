import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { PermissionGuard } from './guard/permission.guard';
import { SearchMachineComponent } from './search-machine/search-machine.component';
import { CreateMachineComponent } from './create-machine/create-machine.component';
import { ErrorHistoryComponent } from 'src/app/error-history/error-history.component';
import { Permission } from './classes/permission';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "showUsers", component: ShowUsersComponent, canActivate: [PermissionGuard], data: {permission: Permission.CAN_READ_USERS}  },
  { path: "addUser", component: AddUserComponent, canActivate: [PermissionGuard], data: {permission: Permission.CAN_CREATE_USERS}  },
  { path: "searchMachine", component: SearchMachineComponent, canActivate: [PermissionGuard], data: {permission: Permission.CAN_SEARCH_MACHINES}  },
  { path: "createMachine", component: CreateMachineComponent, canActivate: [PermissionGuard], data: {permission: Permission.CAN_CREATE_MACHINES}  },
  { path: "errorHistory", component: ErrorHistoryComponent, canActivate: [PermissionGuard], data: {permission: Permission.CAN_SEARCH_MACHINES}  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ErrorHandlerService } from './service/error-handler.service';
import { SearchMachineComponent } from './search-machine/search-machine.component';
import { CreateMachineComponent } from './create-machine/create-machine.component';
import { ErrorHistoryComponent } from 'src/app/error-history/error-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowUsersComponent,
    HomeComponent,
    AddUserComponent,
    UpdateUserComponent,
    SearchMachineComponent,
    CreateMachineComponent,
    ErrorHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

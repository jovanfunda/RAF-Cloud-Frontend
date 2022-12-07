import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  
  private readonly apiUrl = environment.postApi;

  user: User = {
    email: undefined,
    password: undefined,
    name: undefined,
    lastname: undefined,
    permissions: undefined,
    JWT: undefined
  }

  constructor(private httpClient: HttpClient) { }

  addUser(name: String, lastname: String, email: String, permissions: String[]): Observable<String> {
    this.user = {
      email: email,
      password: "1",
      name: name,
      lastname: lastname,
      permissions: permissions,
      JWT: ""
    }
    
    return this.httpClient.post(`${this.apiUrl}/registerUser`, this.user, {responseType : 'text'})
  }
}

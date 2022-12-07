import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient) { }

  updateUser(realEmail: string, _user: User, _password: string) {
    return this.httpClient.post(`${this.apiUrl}/updateUser`, {realEmail: realEmail, user: _user, password: _password});
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowUsersService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/users`, localStorage.getItem("JWToken"));
  }

}

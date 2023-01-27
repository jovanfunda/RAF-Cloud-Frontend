import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient) { }

  updateUser(realEmail: string, _user: User, _password: string): Observable<string> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json', 'jwtoken':localStorage.getItem("JWToken")}  )
    console.log("http", _user.name, _user.lastname, _user.permissions);
    return this.httpClient.post(`${this.apiUrl}/updateUser`, {realEmail: realEmail, user: _user, password: _password}, {responseType : 'text', headers: headers});
  }
}
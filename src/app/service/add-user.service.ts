import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    permissions: undefined
  }

  constructor(private httpClient: HttpClient) { }

  addUser(name: string, lastname: string, email: string, permissions: string[]): Observable<string> {
    this.user = {
      email: email,
      password: "1",
      name: name,
      lastname: lastname,
      permissions: permissions
    }
    
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json', 'jwtoken':localStorage.getItem("JWToken")}  )
    return this.httpClient.post(`${this.apiUrl}/registerUser`, this.user, {responseType : 'text', headers : headers})
  }
}

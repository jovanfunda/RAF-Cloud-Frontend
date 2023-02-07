import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient) { }

  login(_email: string, _password: string): Observable<string> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'}  )
    return this.httpClient.post(`${this.apiUrl}/login`, {email: _email, password: _password}, {responseType : 'text', headers : headers});
  }
}

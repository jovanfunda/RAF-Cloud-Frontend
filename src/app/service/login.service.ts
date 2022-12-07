import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient) { }

  checkPassword(_email: string, _password: string): Observable<string> {
    return this.httpClient.post(`${this.apiUrl}/checkPassword`, {email: _email, password: _password}, {responseType : 'text'});
  }
}

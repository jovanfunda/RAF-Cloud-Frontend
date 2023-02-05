import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient, private errorHandler: ErrorHandler) { }

  updateUser(realEmail: string, _user: User, _password: string): Observable<any> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json', 'jwtoken':localStorage.getItem("JWToken")}  )
    return this.httpClient.post(`${this.apiUrl}/updateUser`, {realEmail: realEmail, user: _user, password: _password}, {responseType : 'text', headers: headers}).pipe(catchError(async (error) => this.errorHandler.handleError(error)));
  }
}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowUsersService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient, private errorHandler: ErrorHandler) { }

  getUsers(): Observable<any> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json', 'jwtoken':localStorage.getItem("JWToken")}  )
    return this.httpClient.get(`${this.apiUrl}/users`, {headers: headers}).pipe(catchError(async (error) => this.errorHandler.handleError(error)))
  }

  deleteUser(user: string): Observable<any> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json', 'jwtoken':localStorage.getItem("JWToken")}  )
    return this.httpClient.post(`${this.apiUrl}/deleteUser`, user, {headers: headers}).pipe(catchError(async (error) => this.errorHandler.handleError(error)));
  }
}

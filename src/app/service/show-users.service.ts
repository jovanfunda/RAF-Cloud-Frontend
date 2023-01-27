import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowUsersService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json', 'jwtoken':localStorage.getItem("JWToken")}  )
    return this.httpClient.post(`${this.apiUrl}/users`, localStorage.getItem("JWToken"), {headers: headers});
  }

  deleteUser(user: string): Observable<any> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json', 'jwtoken':localStorage.getItem("JWToken")}  )
    return this.httpClient.post(`${this.apiUrl}/deleteUser`, user, {headers: headers});
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient) { }

  checkJWToken(permission: string) {
    return this.httpClient.post(`${this.apiUrl}/hasPermission`, {jwtoken: localStorage.getItem("JWToken"), permission: permission});
  }
}

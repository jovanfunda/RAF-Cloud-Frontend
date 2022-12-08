import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient) { }

  checkPermission(_permission: string): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/hasPermission`, {permission: _permission, jwtoken: localStorage.getItem("JWToken")});
  }
}

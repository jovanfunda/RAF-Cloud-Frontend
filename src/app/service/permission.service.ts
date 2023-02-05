import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient, private errorHandler: ErrorHandlerService) { }

  checkPermission(_permission: string): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/hasPermission`, {permission: _permission, jwtoken: localStorage.getItem("JWToken")}).pipe(catchError(error=>this.errorHandler.handleError(error)))
  }
}

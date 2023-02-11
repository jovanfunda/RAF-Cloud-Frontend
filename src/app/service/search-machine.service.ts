import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchMachineService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient, private errorHandler: ErrorHandler) { }

  getMachines(): Observable<any> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json', 'jwtoken':localStorage.getItem("JWToken")}  )
    return this.httpClient.get(`${this.apiUrl}/machines`, {headers: headers}).pipe(catchError(async (error) => this.errorHandler.handleError(error)))
  }

  filterMachines(_name, _status, _dateFrom, _dateTo): Observable<any> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json', 'jwtoken':localStorage.getItem("JWToken")}  )
    return this.httpClient.post(`${this.apiUrl}/filterMachine`, {name: _name, status: _status, dateFrom: _dateFrom, dateTo: _dateTo},
        {headers: headers}).pipe(catchError(async (error) => this.errorHandler.handleError(error)))
  }

  deleteMachine(machineID: BigInt): Observable<any> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json', 'jwtoken':localStorage.getItem("JWToken")}  )
    return this.httpClient.delete(`${this.apiUrl}/deleteMachine/${machineID}`,
        {headers: headers}).pipe(catchError(async (error) => this.errorHandler.handleError(error)))
  }

  startMachine(machineID: BigInt): Observable<any> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json', 'jwtoken':localStorage.getItem("JWToken")}  )
    return this.httpClient.post(`${this.apiUrl}/startMachine/${machineID}`, machineID,
        {headers: headers}).pipe(catchError(async (error) => this.errorHandler.handleError(error)))
  }

  stopMachine(machineID: BigInt): Observable<any> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json', 'jwtoken':localStorage.getItem("JWToken")}  )
    return this.httpClient.post(`${this.apiUrl}/stopMachine/${machineID}`, machineID,
        {headers: headers}).pipe(catchError(async (error) => this.errorHandler.handleError(error)))
  }

  restartMachine(machineID: BigInt): Observable<any> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json', 'jwtoken':localStorage.getItem("JWToken")}  )
    return this.httpClient.post(`${this.apiUrl}/restartMachine/${machineID}`, machineID,
        {headers: headers}).pipe(catchError(async (error) => this.errorHandler.handleError(error)))
  }
}

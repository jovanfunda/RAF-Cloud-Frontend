import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlerService {

  constructor(private router: Router) {
    
  }
  
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      if(error.status == 401) {
        this.router.navigateByUrl("/login");
        alert("Please log in")
      }
    }
    return of();
  }
}
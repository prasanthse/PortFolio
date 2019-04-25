import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET',
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || "Server Error");
  }

  withOutBodyRequest(url: string):Observable<any> {
    return this.http.get<any>(url).pipe(catchError(this.errorHandler));
  }

  withBodyRequest(url: string, body:any):Observable<any> {
    return this.http.post<any>(url, body).pipe(catchError(this.errorHandler));
  }

}

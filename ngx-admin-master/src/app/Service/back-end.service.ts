import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, DELETE',
      'Content-Type': 'application/json',
    })
  };

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || "Server Error");
  }

  getRequest(url: string):Observable<any> {
    return this.http.get<any>(url).pipe(catchError(this.errorHandler));
  }

  postRequest(url: string, body:any):Observable<any> {
    return this.http.post<any>(url, body, this.httpOptions).pipe(catchError(this.errorHandler));
  }

  deleteRequest(url: string):Observable<any> {
    return this.http.delete<any>(url).pipe(catchError(this.errorHandler));
  }
}

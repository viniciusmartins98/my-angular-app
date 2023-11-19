import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpClient {
  readonly baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    const options = { params, headers };
    return this.httpClient.get<T>(`${this.baseUrl}/${url}`, options);
  }
}

import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HousingService {
  constructor(private httpClient: HttpClient) {
    httpClient.options('http://localhost:3000');
  }

  getAllHousingLocation(): Observable<HousingLocation[]> {
    return this.httpClient.get<HousingLocation[]>('/locations');
  }

  getHousingLocationById(id: Number): Observable<HousingLocation> {
    return this.httpClient.get<HousingLocation>(`/locations/${id}`);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}

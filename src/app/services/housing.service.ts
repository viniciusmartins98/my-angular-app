import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';
import { Observable } from 'rxjs';
import { CustomHttpClient } from './custom-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor(private httpClient: CustomHttpClient) {}

  getAllHousingLocation(): Observable<HousingLocation[]> {
    return this.httpClient.get<HousingLocation[]>('locations');
  }

  getHousingLocationById(id: Number): Observable<HousingLocation> {
    return this.httpClient.get<HousingLocation>(`locations/${id}`);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}

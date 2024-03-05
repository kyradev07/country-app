import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Country } from "../interfaces/country";
import { catchError, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchByCapital(capital: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}/capital/${capital}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Country } from "../interfaces/country";
import { catchError, filter, map, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private URL: string = 'https://restcountries.com/v3.1';
  private byCapital: string = `${this.URL}/capital/`;
  private byCountry: string = `${this.URL}/name/`;
  private byContinent: string = `${this.URL}/region/`;
  private byCode: string = `${this.URL}/alpha/`;

  constructor(private http: HttpClient) { }

  searchByCapital(capital: string): Observable<Country[]> {
    return this.doRequest(`${this.byCapital}${capital}`);
  }

  searchByCountry(country: string): Observable<Country[]> {
    return this.doRequest(`${this.byCountry}${country}`);
  }

  searchByContinent(continent: string): Observable<Country[]> {
    return this.doRequest(`${this.byContinent}${continent}`);
  }

  searchByCode(code: string): Observable<Country> {
    return this.doRequest(`${this.byCode}${code}`).pipe(
      map((countries: Country[]) => countries[0]),
    );
  }

  private doRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
    );
  }
}

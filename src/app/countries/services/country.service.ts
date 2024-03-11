import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Country } from "../interfaces/country";
import { catchError, map, Observable, of, tap } from "rxjs";
import { Storage } from "../interfaces/storage";
import { Region } from "../interfaces/region";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private URL: string = 'https://restcountries.com/v3.1';
  private byCapital: string = `${this.URL}/capital/`;
  private byCountry: string = `${this.URL}/name/`;
  private byContinent: string = `${this.URL}/region/`;
  private byCode: string = `${this.URL}/alpha/`;

  cacheStorage: Storage = {
    byCapital: { term: '', countries: of([]) },
    byCountry: { term: '', countries: of([]) },
    byContinent: { countries: of([]) }
  }

  constructor(private http: HttpClient) { }

  searchByCapital(term: string): Observable<Country[]> {
    return this.doRequest(`${this.byCapital}${term}`)
    .pipe(
      tap((countries: Country[]) => this.cacheStorage.byCapital = { term, countries: of(countries) })
    );
  }

  searchByCountry(term: string): Observable<Country[]> {
    return this.doRequest(`${this.byCountry}${term}`)
    .pipe(
      tap((countries: Country[]) => this.cacheStorage.byCountry = { term, countries: of(countries) })
    );
  }

  searchByContinent(region: string): Observable<Country[]> {
    return this.doRequest(`${this.byContinent}${region}`)
    .pipe(
      tap((countries: Country[]) => this.cacheStorage.byContinent = { region: Region[region as keyof typeof Region], countries: of(countries) })
    );
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

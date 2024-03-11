import { Component, OnInit } from '@angular/core';
import { Observable, tap } from "rxjs";
import { Country } from "../../interfaces/country";
import { CountryService } from "../../services/country.service";

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent implements OnInit {
  countries$!: Observable<Country[]>;
  isLoading: boolean = false;
  initialValue: string = '';

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.countries$ = this.countryService.cacheStorage.byCountry.countries;
    this.initialValue = this.countryService.cacheStorage.byCountry.term;
  }

  searchByCountry(country: string): void {
    this.isLoading = true;
    this.countries$ = this.countryService.searchByCountry(country)
    .pipe(
      tap(() => this.isLoading = false)
    );
  }

}

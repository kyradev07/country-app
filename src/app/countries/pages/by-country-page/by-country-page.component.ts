import { Component } from '@angular/core';
import { delay, Observable, tap } from "rxjs";
import { Country } from "../../interfaces/country";
import { CountryService } from "../../services/country.service";

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent {
  countries$!: Observable<Country[]>;
  isLoading: boolean = false;

  constructor(private countryService: CountryService) {
  }

  searchByCountry(country: string): void {
    this.isLoading = true;
    this.countries$ = this.countryService.searchByCountry(country)
    .pipe(
      tap(() => this.isLoading = false)
    );
  }

}

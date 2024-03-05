import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { Country } from "../../interfaces/country";
import { CountryService } from "../../services/country.service";

@Component({
  selector: 'shared-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  countries$!: Observable<Country[]>;

  constructor(private countryService: CountryService) {
  }

  searchByCountry(country: string): void {
    this.countries$ = this.countryService.searchByCountry(country);
  }

}

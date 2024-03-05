import { Component } from '@angular/core';
import { CountryService } from "../../services/country.service";
import { catchError, Observable, of } from "rxjs";
import { Country } from "../../interfaces/country";

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  country$: Observable<Country[]> = new Observable<Country[]>();

  constructor(private countryService: CountryService) {
  }

  searchByCapital(capital: string): void {
    this.country$ = this.countryService.searchByCapital(capital);
  }
}

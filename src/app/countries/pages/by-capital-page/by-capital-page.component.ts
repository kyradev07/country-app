import { Component } from '@angular/core';
import { CountryService } from "../../services/country.service";
import { catchError, delay, Observable, tap } from "rxjs";
import { Country } from "../../interfaces/country";

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  capitals$!: Observable<Country[]>;
  isLoading: boolean = false;

  constructor(private countryService: CountryService) {
  }

  searchByCapital(capital: string): void {
    this.isLoading = true;
    this.capitals$ = this.countryService.searchByCapital(capital)
    .pipe(
      tap(() => this.isLoading = false)
    );
  }
}

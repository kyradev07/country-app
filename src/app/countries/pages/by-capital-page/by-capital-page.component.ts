import { Component, OnInit } from '@angular/core';
import { CountryService } from "../../services/country.service";
import { Observable, tap } from "rxjs";
import { Country } from "../../interfaces/country";

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent implements OnInit {

  capitals$!: Observable<Country[]>;
  isLoading: boolean = false;
  initialValue: string = '';

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.capitals$ = this.countryService.cacheStorage.byCapital.countries;
    this.initialValue = this.countryService.cacheStorage.byCapital.term;
  }

  searchByCapital(capital: string): void {
    this.isLoading = true;
    this.capitals$ = this.countryService.searchByCapital(capital)
    .pipe(
      tap(() => this.isLoading = false)
    );
  }
}

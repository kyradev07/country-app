import { Component } from '@angular/core';
import { CountryService } from "../../services/country.service";
import { Observable } from "rxjs";
import { Country } from "../../interfaces/country";

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  capitals$!: Observable<Country[]>;

  constructor(private countryService: CountryService) {
  }

  searchByCapital(capital: string): void {
    this.capitals$ = this.countryService.searchByCapital(capital);
  }
}

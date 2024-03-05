import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { Country } from "../../interfaces/country";
import { CountryService } from "../../services/country.service";

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  continent$!: Observable<Country[]>;

  constructor(private countryService: CountryService) {
  }

  searchByContinent(continent: string): void {
    this.continent$ = this.countryService.searchByContinent(continent);
  }

}

import { Component } from '@angular/core';
import { Observable, tap } from "rxjs";
import { Country } from "../../interfaces/country";
import { CountryService } from "../../services/country.service";
import { KeyValue } from "@angular/common";

enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Europe = 'Europe',
  Asia = 'Asia',
  Oceania = 'Oceania'
}

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent {
  continent$!: Observable<Country[]>;
  isLoading: boolean = false;
  selectedRegion?: string;

  constructor(private countryService: CountryService) {
  }

  searchByContinent(continent: string): void {
    this.isLoading = true;
    this.selectedRegion = continent
    this.continent$ = this.countryService.searchByContinent(continent)
    .pipe(
      tap(() => this.isLoading = false)
    );
  }

  protected readonly Region = Region;
}

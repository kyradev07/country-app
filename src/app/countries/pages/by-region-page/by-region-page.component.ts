import { Component, OnInit } from '@angular/core';
import { Observable, of, tap } from "rxjs";
import { Country } from "../../interfaces/country";
import { CountryService } from "../../services/country.service";
import { Region } from "../../interfaces/region";

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent implements OnInit {
  continent$!: Observable<Country[]>;
  isLoading: boolean = false;
  selectedRegion: string | undefined = '';
  regions = Region;

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.continent$ = of(this.countryService.cacheStorage.byContinent.countries);
    this.selectedRegion = this.countryService.cacheStorage.byContinent.region;
  }

  searchByContinent(continent: string): void {
    this.isLoading = true;
    this.selectedRegion = continent
    this.continent$ = this.countryService.searchByContinent(continent)
    .pipe(
      tap(() => this.isLoading = false)
    );
  }
}

import { Component, Input } from '@angular/core';
import { Country } from "../../interfaces/country";
import { Observable } from "rxjs";

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html'
})
export class CountryTableComponent {

  @Input() countries$: Observable<Country[]> = new Observable<Country[]>;
}

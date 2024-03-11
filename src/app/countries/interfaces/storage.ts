import { Country } from "./country";
import { Region } from "./region";
import { Observable } from "rxjs";

export interface Storage {
  byCapital: TermCountries,
  byCountry: TermCountries,
  byContinent: RegionCountries
}

export interface TermCountries {
  term: string,
  countries: Observable<Country[]>
}

export interface RegionCountries {
  region?: Region,
  countries: Observable<Country[]>
}

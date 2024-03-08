import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CountryService } from "../../services/country.service";
import { catchError, filter, of, switchMap, tap } from "rxjs";
import { Country } from "../../interfaces/country";

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  country?: Country;

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap((params: Params) => this.countryService.searchByCode(params['id']))
    ).subscribe((country: Country) => {
      if (!country) {
        this.router.navigateByUrl('').then();
        return;
      }
      this.country = { ...country };
      console.log(this.country);
    });
  }
}

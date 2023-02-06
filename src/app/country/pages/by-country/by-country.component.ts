import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  term: string = 'Hola Mundo';

  constructor(private countryService: CountryService) {}

  search() {
    this.countryService.searchCountry(this.term).subscribe((resp) => {
      console.log(resp);
    });
  }
}

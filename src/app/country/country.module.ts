import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByAreaComponent } from './pages/by-area/by-area.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByAreaComponent,
    ShowCountryComponent
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByAreaComponent,
    ShowCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CountryModule { }

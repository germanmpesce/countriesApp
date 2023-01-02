import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByAreaComponent } from './country/pages/by-area/by-area.component';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { ShowCountryComponent } from './country/pages/show-country/show-country.component';

const routes: Routes = [
    {
        path: '',
        component: ByCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'area',
        component: ByAreaComponent
    },
    {
        path: 'capital',
        component: ByCapitalComponent
    },
    {
        path: 'country/:id',
        component: ShowCountryComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule {

}
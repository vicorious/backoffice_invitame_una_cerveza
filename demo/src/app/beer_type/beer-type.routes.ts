import { Routes } from '@angular/router';
import { BeerTypeListComponent } from './beer-type-list/beer-type-list.component';
import { BeerTypeEditComponent } from './beer-type-edit/beer-type-edit.component';

export const BEER_TYPE_ROUTES: Routes = [
  {
    path: 'beerTypes',
    component: BeerTypeListComponent
  },
  {
    path: 'beerTypes/:id',
    component: BeerTypeEditComponent
  }
];

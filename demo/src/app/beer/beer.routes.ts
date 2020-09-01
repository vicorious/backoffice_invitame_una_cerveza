import { Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';

export const BEER_ROUTES: Routes = [
  {
    path: 'beers',
    component: BeerListComponent
  },
  {
    path: 'beers/:id',
    component: BeerEditComponent
  }
];

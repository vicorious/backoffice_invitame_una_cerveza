import { Routes } from '@angular/router';
import { BarListComponent } from './bar-list/bar-list.component';
import { BarEditComponent } from './bar-edit/bar-edit.component';

export const BAR_ROUTES: Routes = [
  {
    path: 'bars',
    component: BarListComponent
  },
  {
    path: 'bars/:id',
    component: BarEditComponent
  }
];

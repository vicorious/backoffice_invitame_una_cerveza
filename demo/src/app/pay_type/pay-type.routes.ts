import { Routes } from '@angular/router';
import { PayTypeListComponent } from './pay-type-list/pay-type-list.component';
import { PayTypeEditComponent } from './pay-type-edit/pay-type-edit.component';

export const PAY_TYPE_ROUTES: Routes = [
  {
    path: 'payTypes',
    component: PayTypeListComponent
  },
  {
    path: 'payTypes/:id',
    component: PayTypeEditComponent
  }
];

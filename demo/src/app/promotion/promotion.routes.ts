import { Routes } from '@angular/router';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { PromotionEditComponent } from './promotion-edit/promotion-edit.component';

export const PROMOTION_ROUTES: Routes = [
  {
    path: 'promotions',
    component: PromotionListComponent
  },
  {
    path: 'promotions/:id',
    component: PromotionEditComponent
  }
];

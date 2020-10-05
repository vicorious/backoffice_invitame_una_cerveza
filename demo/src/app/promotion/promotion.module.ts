import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { PromotionEditComponent } from './promotion-edit/promotion-edit.component';
import { PromotionService } from './promotion.service';
import { PROMOTION_ROUTES } from './promotion.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PROMOTION_ROUTES)
  ],
  declarations: [
    PromotionListComponent,
    PromotionEditComponent
  ],
  providers: [PromotionService],
  exports: []
})
export class PromotionModule { }

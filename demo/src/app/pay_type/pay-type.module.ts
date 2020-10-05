import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PayTypeListComponent } from './pay-type-list/pay-type-list.component';
import { PayTypeEditComponent } from './pay-type-edit/pay-type-edit.component';
import { PayTypeService } from './pay-type.service';
import { PAY_TYPE_ROUTES } from './pay-type.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PAY_TYPE_ROUTES)
  ],
  declarations: [
    PayTypeListComponent,
    PayTypeEditComponent
  ],
  providers: [PayTypeService],
  exports: []
})
export class PayTypeModule { }

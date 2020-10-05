import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BarListComponent } from './bar-list/bar-list.component';
import { BarEditComponent } from './bar-edit/bar-edit.component';
import { BarService } from './bar.service';
import { BAR_ROUTES } from './bar.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(BAR_ROUTES)
  ],
  declarations: [
    BarListComponent,
    BarEditComponent
  ],
  providers: [BarService],
  exports: []
})
export class BarModule { }

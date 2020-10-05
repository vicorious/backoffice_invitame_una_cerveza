import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BeerTypeListComponent } from './beer-type-list/beer-type-list.component';
import { BeerTypeEditComponent } from './beer-type-edit/beer-type-edit.component';
import { BeerTypeService } from './beer-type.service';
import { BEER_TYPE_ROUTES } from './beer-type.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(BEER_TYPE_ROUTES)
  ],
  declarations: [
    BeerTypeListComponent,
    BeerTypeEditComponent
  ],
  providers: [BeerTypeService],
  exports: []
})
export class BeerTypeModule { }

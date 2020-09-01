import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';
import { BeerService } from './beer.service';
import { BEER_ROUTES } from './beer.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(BEER_ROUTES)
  ],
  declarations: [
    BeerListComponent,
    BeerEditComponent
  ],
  providers: [BeerService],
  exports: []
})
export class BeerModule { }

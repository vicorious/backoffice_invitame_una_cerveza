import { Component, OnInit } from '@angular/core';
import { BeerTypeFilter } from '../beer-type-filter';
import { BeerTypeService } from '../beer-type.service';
import { BeerType } from '../beer-type';

@Component({
  selector: 'app-beer-type',
  templateUrl: 'beer-type-list.component.html'
})
export class BeerTypeListComponent implements OnInit {

  filter = new BeerTypeFilter();
  selectedBeerType: BeerType;
  feedback: any = {};

  get beerTypeList(): BeerType[] {
    return this.beerTypeService.beerTypeList;
  }

  constructor(private beerTypeService: BeerTypeService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.beerTypeService.load(this.filter);
  }

  select(selected: BeerType): void {
    this.selectedBeerType = selected;
  }

  delete(beerType: BeerType): void {
    if (confirm('Are you sure?')) {
      this.beerTypeService.delete(beerType).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }
}

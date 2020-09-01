import { Component, OnInit } from '@angular/core';
import { BeerFilter } from '../beer-filter';
import { BeerService } from '../beer.service';
import { Beer } from '../beer';

@Component({
  selector: 'app-beer',
  templateUrl: 'beer-list.component.html'
})
export class BeerListComponent implements OnInit {

  filter = new BeerFilter();
  selectedBeer: Beer;
  feedback: any = {};

  get beerList(): Beer[] {
    return this.beerService.beerList;
  }

  constructor(private beerService: BeerService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.beerService.load(this.filter);
  }

  select(selected: Beer): void {
    this.selectedBeer = selected;
  }

  delete(beer: Beer): void {
    if (confirm('Are you sure?')) {
      this.beerService.delete(beer).subscribe(() => {
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

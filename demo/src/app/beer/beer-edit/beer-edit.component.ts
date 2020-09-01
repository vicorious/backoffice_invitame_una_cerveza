import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BeerService } from '../beer.service';
import { Beer } from '../beer';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-beer-edit',
  templateUrl: './beer-edit.component.html'
})
export class BeerEditComponent implements OnInit {

  id: string;
  beer: Beer;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private beerService: BeerService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Beer()); }
          return this.beerService.findById(id);
        })
      )
      .subscribe(beer => {
          this.beer = beer;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.beerService.save(this.beer).subscribe(
      beer => {
        this.beer = beer;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/beers']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/beers']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BeerTypeService } from '../beer-type.service';
import { BeerType } from '../beer-type';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-beer-type-edit',
  templateUrl: './beer-type-edit.component.html'
})
export class BeerTypeEditComponent implements OnInit {

  id: string;
  beerType: BeerType;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private beerTypeService: BeerTypeService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new BeerType()); }
          return this.beerTypeService.findById(id);
        })
      )
      .subscribe(beerType => {
          this.beerType = beerType;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.beerTypeService.save(this.beerType).subscribe(
      beerType => {
        this.beerType = beerType;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/beerTypes']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/beerTypes']);
  }
}

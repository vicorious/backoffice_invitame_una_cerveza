import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PromotionService } from '../promotion.service';
import { Promotion } from '../promotion';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-promotion-edit',
  templateUrl: './promotion-edit.component.html'
})
export class PromotionEditComponent implements OnInit {

  id: string;
  promotion: Promotion;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private promotionService: PromotionService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Promotion()); }
          return this.promotionService.findById(id);
        })
      )
      .subscribe(promotion => {
          this.promotion = promotion;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.promotionService.save(this.promotion).subscribe(
      promotion => {
        this.promotion = promotion;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/promotions']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/promotions']);
  }
}

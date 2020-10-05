import { Component, OnInit } from '@angular/core';
import { PromotionFilter } from '../promotion-filter';
import { PromotionService } from '../promotion.service';
import { Promotion } from '../promotion';

@Component({
  selector: 'app-promotion',
  templateUrl: 'promotion-list.component.html'
})
export class PromotionListComponent implements OnInit {

  filter = new PromotionFilter();
  selectedPromotion: Promotion;
  feedback: any = {};

  get promotionList(): Promotion[] {
    return this.promotionService.promotionList;
  }

  constructor(private promotionService: PromotionService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.promotionService.load(this.filter);
  }

  select(selected: Promotion): void {
    this.selectedPromotion = selected;
  }

  delete(promotion: Promotion): void {
    if (confirm('Are you sure?')) {
      this.promotionService.delete(promotion).subscribe(() => {
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

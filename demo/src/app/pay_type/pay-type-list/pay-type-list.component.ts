import { Component, OnInit } from '@angular/core';
import { PayTypeFilter } from '../pay-type-filter';
import { PayTypeService } from '../pay-type.service';
import { PayType } from '../pay-type';

@Component({
  selector: 'app-pay-type',
  templateUrl: 'pay-type-list.component.html'
})
export class PayTypeListComponent implements OnInit {

  filter = new PayTypeFilter();
  selectedPayType: PayType;
  feedback: any = {};

  get payTypeList(): PayType[] {
    return this.payTypeService.payTypeList;
  }

  constructor(private payTypeService: PayTypeService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.payTypeService.load(this.filter);
  }

  select(selected: PayType): void {
    this.selectedPayType = selected;
  }

  delete(payType: PayType): void {
    if (confirm('Are you sure?')) {
      this.payTypeService.delete(payType).subscribe(() => {
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

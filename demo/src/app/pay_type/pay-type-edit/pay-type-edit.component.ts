import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PayTypeService } from '../pay-type.service';
import { PayType } from '../pay-type';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pay-type-edit',
  templateUrl: './pay-type-edit.component.html'
})
export class PayTypeEditComponent implements OnInit {

  id: string;
  payType: PayType;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private payTypeService: PayTypeService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new PayType()); }
          return this.payTypeService.findById(id);
        })
      )
      .subscribe(payType => {
          this.payType = payType;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.payTypeService.save(this.payType).subscribe(
      payType => {
        this.payType = payType;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/payTypes']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/payTypes']);
  }
}

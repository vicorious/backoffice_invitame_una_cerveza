import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BarService } from '../bar.service';
import { Bar } from '../bar';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-bar-edit',
  templateUrl: './bar-edit.component.html'
})
export class BarEditComponent implements OnInit {

  id: string;
  bar: Bar;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private barService: BarService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Bar()); }
          return this.barService.findById(id);
        })
      )
      .subscribe(bar => {
          this.bar = bar;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.barService.save(this.bar).subscribe(
      bar => {
        this.bar = bar;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/bars']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/bars']);
  }
}

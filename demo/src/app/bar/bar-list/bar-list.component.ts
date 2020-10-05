import { Component, OnInit } from '@angular/core';
import { BarFilter } from '../bar-filter';
import { BarService } from '../bar.service';
import { Bar } from '../bar';

@Component({
  selector: 'app-bar',
  templateUrl: 'bar-list.component.html'
})
export class BarListComponent implements OnInit {

  filter = new BarFilter();
  selectedBar: Bar;
  feedback: any = {};

  get barList(): Bar[] {
    return this.barService.barList;
  }

  constructor(private barService: BarService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.barService.load(this.filter);
  }

  select(selected: Bar): void {
    this.selectedBar = selected;
  }

  delete(bar: Bar): void {
    if (confirm('Are you sure?')) {
      this.barService.delete(bar).subscribe(() => {
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

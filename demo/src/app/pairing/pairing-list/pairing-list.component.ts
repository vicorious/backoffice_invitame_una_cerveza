import { Component, OnInit } from '@angular/core';
import { PairingFilter } from '../pairing-filter';
import { PairingService } from '../pairing.service';
import { Pairing } from '../pairing';

@Component({
  selector: 'app-pairing',
  templateUrl: 'pairing-list.component.html'
})
export class PairingListComponent implements OnInit {

  filter = new PairingFilter();
  selectedPairing: Pairing;
  feedback: any = {};

  get pairingList(): Pairing[] {
    return this.pairingService.pairingList;
  }

  constructor(private pairingService: PairingService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.pairingService.load(this.filter);
  }

  select(selected: Pairing): void {
    this.selectedPairing = selected;
  }

  delete(pairing: Pairing): void {
    if (confirm('Are you sure?')) {
      this.pairingService.delete(pairing).subscribe(() => {
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

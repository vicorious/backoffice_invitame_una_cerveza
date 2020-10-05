import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PairingService } from '../pairing.service';
import { Pairing } from '../pairing';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pairing-edit',
  templateUrl: './pairing-edit.component.html'
})
export class PairingEditComponent implements OnInit {

  id: string;
  pairing: Pairing;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pairingService: PairingService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Pairing()); }
          return this.pairingService.findById(id);
        })
      )
      .subscribe(pairing => {
          this.pairing = pairing;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.pairingService.save(this.pairing).subscribe(
      pairing => {
        this.pairing = pairing;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/pairings']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/pairings']);
  }
}

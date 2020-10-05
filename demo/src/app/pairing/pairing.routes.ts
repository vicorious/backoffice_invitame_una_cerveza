import { Routes } from '@angular/router';
import { PairingListComponent } from './pairing-list/pairing-list.component';
import { PairingEditComponent } from './pairing-edit/pairing-edit.component';

export const PAIRING_ROUTES: Routes = [
  {
    path: 'pairings',
    component: PairingListComponent
  },
  {
    path: 'pairings/:id',
    component: PairingEditComponent
  }
];

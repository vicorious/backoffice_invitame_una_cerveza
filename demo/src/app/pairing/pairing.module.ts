import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PairingListComponent } from './pairing-list/pairing-list.component';
import { PairingEditComponent } from './pairing-edit/pairing-edit.component';
import { PairingService } from './pairing.service';
import { PAIRING_ROUTES } from './pairing.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PAIRING_ROUTES)
  ],
  declarations: [
    PairingListComponent,
    PairingEditComponent
  ],
  providers: [PairingService],
  exports: []
})
export class PairingModule { }

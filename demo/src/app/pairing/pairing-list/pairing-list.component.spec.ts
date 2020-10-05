import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PairingListComponent } from './pairing-list.component';
import { PairingService } from '../pairing.service';

describe('PairingListComponent', () => {
  let component: PairingListComponent;
  let fixture: ComponentFixture<PairingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PairingListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PairingService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

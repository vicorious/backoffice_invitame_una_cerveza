import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PairingEditComponent } from './pairing-edit.component';
import { PairingService } from '../pairing.service';

describe('PairingEditComponent', () => {
  let component: PairingEditComponent;
  let fixture: ComponentFixture<PairingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PairingEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PairingService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

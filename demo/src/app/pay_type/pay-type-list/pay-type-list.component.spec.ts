import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PayTypeListComponent } from './pay-type-list.component';
import { PayTypeService } from '../pay-type.service';

describe('PayTypeListComponent', () => {
  let component: PayTypeListComponent;
  let fixture: ComponentFixture<PayTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PayTypeListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PayTypeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

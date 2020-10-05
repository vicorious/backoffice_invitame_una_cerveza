import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PromotionEditComponent } from './promotion-edit.component';
import { PromotionService } from '../promotion.service';

describe('PromotionEditComponent', () => {
  let component: PromotionEditComponent;
  let fixture: ComponentFixture<PromotionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PromotionService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

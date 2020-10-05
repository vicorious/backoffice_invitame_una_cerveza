import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BeerTypeEditComponent } from './beer-type-edit.component';
import { BeerTypeService } from '../beer-type.service';

describe('BeerTypeEditComponent', () => {
  let component: BeerTypeEditComponent;
  let fixture: ComponentFixture<BeerTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeerTypeEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [BeerTypeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BeerTypeListComponent } from './beer-type-list.component';
import { BeerTypeService } from '../beer-type.service';

describe('BeerTypeListComponent', () => {
  let component: BeerTypeListComponent;
  let fixture: ComponentFixture<BeerTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeerTypeListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [BeerTypeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

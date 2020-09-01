import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BeerEditComponent } from './beer-edit.component';
import { BeerService } from '../beer.service';

describe('BeerEditComponent', () => {
  let component: BeerEditComponent;
  let fixture: ComponentFixture<BeerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeerEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [BeerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

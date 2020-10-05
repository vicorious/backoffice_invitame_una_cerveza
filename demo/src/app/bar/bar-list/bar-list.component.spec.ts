import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BarListComponent } from './bar-list.component';
import { BarService } from '../bar.service';

describe('BarListComponent', () => {
  let component: BarListComponent;
  let fixture: ComponentFixture<BarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [BarService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

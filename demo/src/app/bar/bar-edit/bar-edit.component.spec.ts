import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BarEditComponent } from './bar-edit.component';
import { BarService } from '../bar.service';

describe('BarEditComponent', () => {
  let component: BarEditComponent;
  let fixture: ComponentFixture<BarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [BarService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

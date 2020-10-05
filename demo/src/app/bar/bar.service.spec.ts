import { TestBed } from '@angular/core/testing';
import { BarService } from './bar.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BarService', () => {
  let service: BarService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BarService]
    });

    service = TestBed.get(BarService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

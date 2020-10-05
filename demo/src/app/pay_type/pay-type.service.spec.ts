import { TestBed } from '@angular/core/testing';
import { PayTypeService } from './pay-type.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PayTypeService', () => {
  let service: PayTypeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PayTypeService]
    });

    service = TestBed.get(PayTypeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

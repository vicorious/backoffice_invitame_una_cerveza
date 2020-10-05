import { TestBed } from '@angular/core/testing';
import { PromotionService } from './promotion.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PromotionService', () => {
  let service: PromotionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PromotionService]
    });

    service = TestBed.get(PromotionService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

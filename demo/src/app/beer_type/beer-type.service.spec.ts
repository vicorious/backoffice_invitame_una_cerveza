import { TestBed } from '@angular/core/testing';
import { BeerTypeService } from './beer-type.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BeerTypeService', () => {
  let service: BeerTypeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BeerTypeService]
    });

    service = TestBed.get(BeerTypeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

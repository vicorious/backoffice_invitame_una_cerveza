import { TestBed } from '@angular/core/testing';
import { BeerService } from './beer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BeerService', () => {
  let service: BeerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BeerService]
    });

    service = TestBed.get(BeerService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

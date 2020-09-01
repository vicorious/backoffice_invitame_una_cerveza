import { TestBed } from '@angular/core/testing';
import { FlightService } from './flight.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FlightService', () => {
  let service: FlightService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightService]
    });

    service = TestBed.get(FlightService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

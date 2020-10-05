import { TestBed } from '@angular/core/testing';
import { PairingService } from './pairing.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PairingService', () => {
  let service: PairingService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PairingService]
    });

    service = TestBed.get(PairingService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

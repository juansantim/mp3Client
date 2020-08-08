import { TestBed } from '@angular/core/testing';

import { Mp3ServiceService } from './mp3-service.service';

describe('Mp3ServiceService', () => {
  let service: Mp3ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mp3ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

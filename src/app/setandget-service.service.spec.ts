import { TestBed } from '@angular/core/testing';

import { SetandgetServiceService } from './setandget-service.service';

describe('SetandgetServiceService', () => {
  let service: SetandgetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetandgetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

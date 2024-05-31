import { TestBed } from '@angular/core/testing';

import { CountSignalServiceService } from './count-signal-service.service';

describe('CountSignalServiceService', () => {
  let service: CountSignalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountSignalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

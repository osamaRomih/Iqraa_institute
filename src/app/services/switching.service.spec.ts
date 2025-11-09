import { TestBed } from '@angular/core/testing';

import { SwitchingService } from './switching.service';

describe('SwitchingService', () => {
  let service: SwitchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

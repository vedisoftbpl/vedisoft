import { TestBed } from '@angular/core/testing';

import { FeeDataService } from './fee-data.service';

describe('FeeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeeDataService = TestBed.get(FeeDataService);
    expect(service).toBeTruthy();
  });
});

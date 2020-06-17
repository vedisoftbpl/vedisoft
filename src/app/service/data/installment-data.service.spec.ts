import { TestBed } from '@angular/core/testing';

import { InstallmentDataService } from './installment-data.service';

describe('InstallmentDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstallmentDataService = TestBed.get(InstallmentDataService);
    expect(service).toBeTruthy();
  });
});

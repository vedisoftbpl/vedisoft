import { TestBed } from '@angular/core/testing';

import { BadDebtsService } from './bad-debts.service';

describe('BadDebtsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BadDebtsService = TestBed.get(BadDebtsService);
    expect(service).toBeTruthy();
  });
});

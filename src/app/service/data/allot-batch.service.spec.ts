import { TestBed } from '@angular/core/testing';

import { AllotBatchService } from './allot-batch.service';

describe('AllotBatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllotBatchService = TestBed.get(AllotBatchService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BatchwiseCollectionService } from './batchwise-collection.service';

describe('BatchwiseCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatchwiseCollectionService = TestBed.get(BatchwiseCollectionService);
    expect(service).toBeTruthy();
  });
});

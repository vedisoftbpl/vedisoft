import { TestBed } from '@angular/core/testing';

import { BranchwiseCollectionService } from './branchwise-collection.service';

describe('BranchwiseCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BranchwiseCollectionService = TestBed.get(BranchwiseCollectionService);
    expect(service).toBeTruthy();
  });
});

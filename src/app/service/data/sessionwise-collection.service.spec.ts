import { TestBed } from '@angular/core/testing';

import { SessionwiseCollectionService } from './sessionwise-collection.service';

describe('SessionwiseCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionwiseCollectionService = TestBed.get(SessionwiseCollectionService);
    expect(service).toBeTruthy();
  });
});

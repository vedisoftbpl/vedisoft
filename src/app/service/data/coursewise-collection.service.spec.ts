import { TestBed } from '@angular/core/testing';

import { CoursewiseCollectionService } from './coursewise-collection.service';

describe('CoursewiseCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursewiseCollectionService = TestBed.get(CoursewiseCollectionService);
    expect(service).toBeTruthy();
  });
});

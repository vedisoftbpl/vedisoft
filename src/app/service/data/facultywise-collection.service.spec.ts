import { TestBed } from '@angular/core/testing';

import { FacultywiseCollectionService } from './facultywise-collection.service';

describe('FacultywiseCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacultywiseCollectionService = TestBed.get(FacultywiseCollectionService);
    expect(service).toBeTruthy();
  });
});

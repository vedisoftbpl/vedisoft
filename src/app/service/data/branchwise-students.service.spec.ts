import { TestBed } from '@angular/core/testing';

import { BranchwiseStudentsService } from './branchwise-students.service';

describe('BranchwiseStudentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BranchwiseStudentsService = TestBed.get(BranchwiseStudentsService);
    expect(service).toBeTruthy();
  });
});

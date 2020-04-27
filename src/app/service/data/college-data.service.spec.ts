import { TestBed } from '@angular/core/testing';

import { CollegeDataService } from './college-data.service';

describe('CollegeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollegeDataService = TestBed.get(CollegeDataService);
    expect(service).toBeTruthy();
  });
});

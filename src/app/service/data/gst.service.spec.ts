import { TestBed } from '@angular/core/testing';

import { GstService } from './gst.service';

describe('GstService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GstService = TestBed.get(GstService);
    expect(service).toBeTruthy();
  });
});

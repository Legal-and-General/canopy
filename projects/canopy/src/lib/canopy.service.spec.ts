import { TestBed } from '@angular/core/testing';

import { CanopyService } from './canopy.service';

describe('CanopyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanopyService = TestBed.inject(CanopyService);
    expect(service).toBeTruthy();
  });
});

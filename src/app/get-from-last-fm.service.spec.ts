import { TestBed } from '@angular/core/testing';

import { GetFromLastFmService } from './get-from-last-fm.service';

describe('GetFromLastFmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFromLastFmService = TestBed.get(GetFromLastFmService);
    expect(service).toBeTruthy();
  });
});

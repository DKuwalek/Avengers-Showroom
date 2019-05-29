import { TestBed } from '@angular/core/testing';

import { AvngrsService } from './avngrs.service';

describe('AvngrsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvngrsService = TestBed.get(AvngrsService);
    expect(service).toBeTruthy();
  });
});

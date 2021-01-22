import { TestBed } from '@angular/core/testing';

import { StoreSummaryService } from './store-summary.service';

describe('StoreSummaryService', () => {
  let service: StoreSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

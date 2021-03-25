import { TestBed } from '@angular/core/testing';

import { DataPotsService } from './data-pots.service';

describe('DataPotsService', () => {
  let service: DataPotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

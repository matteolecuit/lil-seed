import { TestBed } from '@angular/core/testing';

import { UserPotService } from './user-pot.service';

describe('UserPotService', () => {
  let service: UserPotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

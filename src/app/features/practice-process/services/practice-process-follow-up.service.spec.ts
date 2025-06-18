import { TestBed } from '@angular/core/testing';

import { PracticeProcessFollowUpService } from './practice-process-follow-up.service';

describe('PracticeProcessFollowUpService', () => {
  let service: PracticeProcessFollowUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeProcessFollowUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

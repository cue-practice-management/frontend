import { TestBed } from '@angular/core/testing';

import { PracticeProcessDeliverableService } from './practice-process-deliverable.service';

describe('PracticeProcessDeliverableService', () => {
  let service: PracticeProcessDeliverableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeProcessDeliverableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

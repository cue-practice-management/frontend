import { TestBed } from '@angular/core/testing';

import { PracticeProcessService } from './practice-process.service';

describe('PracticeProcessService', () => {
  let service: PracticeProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

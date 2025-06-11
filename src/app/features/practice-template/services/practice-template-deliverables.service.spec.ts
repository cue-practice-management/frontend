import { TestBed } from '@angular/core/testing';

import { PracticeTemplateDeliverablesService } from './practice-template-deliverables.service';

describe('PracticeTemplateDeliverablesService', () => {
  let service: PracticeTemplateDeliverablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeTemplateDeliverablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

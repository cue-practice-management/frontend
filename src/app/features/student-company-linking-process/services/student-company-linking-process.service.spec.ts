import { TestBed } from '@angular/core/testing';

import { StudentCompanyLinkingProcessService } from './student-company-linking-process.service';

describe('StudentCompanyLinkingProcessService', () => {
  let service: StudentCompanyLinkingProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentCompanyLinkingProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StudentCompanyContractService } from './student-company-contract.service';

describe('StudentCompanyContractService', () => {
  let service: StudentCompanyContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentCompanyContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

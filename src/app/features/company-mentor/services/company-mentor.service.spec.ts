import { TestBed } from '@angular/core/testing';

import { CompanyMentorService } from './company-mentor.service';

describe('CompanyMentorService', () => {
  let service: CompanyMentorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyMentorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

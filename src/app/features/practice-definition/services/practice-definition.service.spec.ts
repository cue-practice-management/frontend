import { TestBed } from '@angular/core/testing';

import { PracticeDefinitionService } from './practice-definition.service';

describe('PracticeDefinitionService', () => {
  let service: PracticeDefinitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeDefinitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

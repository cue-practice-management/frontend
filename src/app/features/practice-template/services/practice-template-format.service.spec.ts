import { TestBed } from '@angular/core/testing';

import { PracticeTemplateFormatService } from './practice-template-format.service';

describe('PracticeTemplateFormatService', () => {
  let service: PracticeTemplateFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeTemplateFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

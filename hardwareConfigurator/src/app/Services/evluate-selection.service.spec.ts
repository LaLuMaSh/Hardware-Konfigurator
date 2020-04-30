import { TestBed } from '@angular/core/testing';

import { EvaluateSelectionService } from './evaluate-selection.service';

describe('EvluateSelectionService', () => {
  let service: EvaluateSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluateSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

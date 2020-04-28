import { TestBed } from '@angular/core/testing';

import { MatStepperService } from './mat-stepper.service';

describe('MatStepperServiceService', () => {
  let service: MatStepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatStepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

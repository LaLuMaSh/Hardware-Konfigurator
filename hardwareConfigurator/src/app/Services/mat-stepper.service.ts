import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatStepperService {

  proceedStep = new Subject<boolean>();

  constructor() { }

  nextStep = () => {
    this.proceedStep.next(true);
  }
}

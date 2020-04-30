import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluateSelectionService {

  constructor() {
  }

  evaluateSelection = (key: string) => {
    return localStorage.getItem(key);
  }
}

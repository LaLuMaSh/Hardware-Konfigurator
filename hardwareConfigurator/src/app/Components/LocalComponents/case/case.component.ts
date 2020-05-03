import { Component, OnInit } from '@angular/core';
import { Storage } from '../../../Models/storage';
import { Case } from '../../../Models/case';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

  title = 'Choose your Case';
  cases: Case[];
  constructor() { }

  ngOnInit(): void {
    this.cases = Case.cases();
  }

}

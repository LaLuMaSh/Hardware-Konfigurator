import { Component, OnInit } from '@angular/core';
import { Cooling } from '../../../Models/cooling';

@Component({
  selector: 'app-cooling',
  templateUrl: './cooling.component.html',
  styleUrls: ['./cooling.component.scss']
})
export class CoolingComponent implements OnInit {

  title = 'Choose your Cooling System';
  cooling: Cooling[];
  constructor() { }

  ngOnInit(): void {
    this.cooling = Cooling.cooling();
  }

}

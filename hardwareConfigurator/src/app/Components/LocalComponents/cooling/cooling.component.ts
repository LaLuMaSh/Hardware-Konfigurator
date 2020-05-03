import { Component, OnInit } from '@angular/core';
import { Storage } from '../../../Models/storage';

@Component({
  selector: 'app-cooling',
  templateUrl: './cooling.component.html',
  styleUrls: ['./cooling.component.scss']
})
export class CoolingComponent implements OnInit {

  title = 'Choose your Cooling System';
  storages: Storage[];
  constructor() { }

  ngOnInit(): void {
    this.storages = Storage.storage();
  }

}

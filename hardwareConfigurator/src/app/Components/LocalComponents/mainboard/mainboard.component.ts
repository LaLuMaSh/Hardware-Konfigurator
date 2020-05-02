import { Component, OnInit } from '@angular/core';
import { Mainboard } from '../../../Models/mainboard';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss']
})
export class MainboardComponent implements OnInit {

  title = 'Choose your Mainboard';
  mainboards: Mainboard[];

  constructor() { }

  ngOnInit(): void {
    this.mainboards = Mainboard.mainboards();
  }
}

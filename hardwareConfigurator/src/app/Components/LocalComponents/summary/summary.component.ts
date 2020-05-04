import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  platform;
  cpu;
  mainboard;
  gpu;
  ram;
  storage;
  cooling;
  case;
  decoration;

  items;

  ngOnInit() {
    this.platform = JSON.parse(localStorage.getItem('platform'));
    this.cpu = JSON.parse(localStorage.getItem('cpu'));
    this.mainboard = JSON.parse(localStorage.getItem('mainboard'));
    this.gpu = JSON.parse(localStorage.getItem('gpu'));
    this.ram = JSON.parse(localStorage.getItem('ram'));
    this.storage = JSON.parse(localStorage.getItem('storage'));
    this.cooling = JSON.parse(localStorage.getItem('cooling'));
    this.case = JSON.parse(localStorage.getItem('case'));
    this.decoration = JSON.parse(localStorage.getItem('decoration'));

    this.items = [
      this.platform,
      this.cpu,
      this.mainboard,
      this.gpu,
      this.ram,
      this.storage,
      this.cooling,
      this.case,
      this.decoration
    ];

    console.log(this.items);
  }

}

import { Component, OnInit } from '@angular/core';
import { Ram } from '../../../Models/Ram';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.scss']
})
export class RamComponent implements OnInit {

  title = 'Choose your RAM';
  ram: Ram[];

  constructor() {
  }

  ngOnInit(): void {
    this.ram = Ram.rams();
  }


}

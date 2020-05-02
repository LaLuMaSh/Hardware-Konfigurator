import { Component, OnInit } from '@angular/core';
import { Cpu } from '../../../Models/cpus';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.scss']
})
export class CpuComponent implements OnInit {

  title = 'Choose your CPU';

  canAdvance = false;
  cpus: Cpu[];

  constructor() { }

  ngOnInit(): void {
    this.cpus = Cpu.cpus();
  }
}

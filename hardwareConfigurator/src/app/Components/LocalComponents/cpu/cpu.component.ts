import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.scss']
})
export class CpuComponent implements OnInit {

  title = 'Choose your CPU';

  canAdvance = false;

  constructor() { }

  ngOnInit(): void {
  }

}

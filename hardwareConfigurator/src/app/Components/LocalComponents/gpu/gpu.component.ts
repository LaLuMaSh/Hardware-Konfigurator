import { Component, OnInit } from '@angular/core';
import { Gpu } from '../../../Models/gpu';

@Component({
  selector: 'app-gpu',
  templateUrl: './gpu.component.html',
  styleUrls: ['./gpu.component.scss']
})
export class GpuComponent implements OnInit {

  constructor() { }
  title = 'Choose your graphics card';
  GPUs: Gpu[];

  ngOnInit(): void {
    this.GPUs = Gpu.gpus();
  }
}

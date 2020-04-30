import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatStepperService } from '../../../Services/mat-stepper.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {

  title = 'Konfigurieren sie ihren Computer!';
  intel = 'Intel';
  amd = 'AMD';
  canAdvance = false;
  selectedPlatform;

  constructor(
    private matStepperService: MatStepperService
  ) {
  }

  ngOnInit(): void {
  }

  nextStep = () => {
    this.matStepperService.nextStep();
  }

  writePlatform = (platform: string) => {
    localStorage.setItem('platform', platform);
    this.canAdvance = true;
    this.selectedPlatform = localStorage.getItem('platform');
  }
}

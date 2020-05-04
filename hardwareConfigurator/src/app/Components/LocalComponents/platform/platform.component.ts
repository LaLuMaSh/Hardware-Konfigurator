import { Component, OnInit } from '@angular/core';
import { MatStepperService } from '../../../Services/mat-stepper.service';
import { EvaluateSelectionService } from '../../../Services/evaluate-selection.service';

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
  showBackwardsStep = false;

  constructor(
    private matStepperService: MatStepperService,
    private evaluateSelectionService: EvaluateSelectionService
  ) {
  }

  ngOnInit(): void {
    this.selectedPlatform = JSON.parse(this.evaluateSelectionService.evaluateSelection('platform'));
    if (this.selectedPlatform) {
      this.canAdvance = true;
    }
  }

  writePlatform = (platform: string) => {
    localStorage.setItem('platform', `{"name": "${platform}"}`);
    this.canAdvance = true;
    this.selectedPlatform = JSON.parse(localStorage.getItem('platform'));
  }
}

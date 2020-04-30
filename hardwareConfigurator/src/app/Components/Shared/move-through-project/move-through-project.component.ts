import { Component, Input, OnInit } from '@angular/core';
import { MatStepperService } from '../../../Services/mat-stepper.service';

@Component({
  selector: 'app-move-through-project',
  templateUrl: './move-through-project.component.html',
  styleUrls: ['./move-through-project.component.scss']
})
export class MoveThroughProjectComponent implements OnInit {

  @Input() canAdvance = false;
  @Input() showBackwardsStep = true;

  constructor(private matStepperService: MatStepperService) { }

  ngOnInit(): void {
  }

  nextStep = () => {
    this.matStepperService.nextStep();
  }

  previousStep = () => {
    this.matStepperService.previousStep();
  }

}

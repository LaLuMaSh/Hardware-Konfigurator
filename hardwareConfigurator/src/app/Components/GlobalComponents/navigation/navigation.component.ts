import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatStepperService } from '../../../Services/mat-stepper.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('stepper', { static: true }) stepper: MatStepper;

  selectedStepIndex = 0;

  steps = [
    'platform',
    'cpu',
    'mainboard',
    'gpu',
    'ram',
    'storage',
    'cooling',
    'case',
    'decoration',
    'summary'
  ];

  constructor(
    private router: Router,
    private stepperService: MatStepperService,
  ) { }

  navigate(event): void {
    this.selectedStepIndex = event.selectedIndex;
    const url = this.steps[this.selectedStepIndex];
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
    this.stepperService.proceedStep.subscribe(next => this.stepper.next());
  }
}

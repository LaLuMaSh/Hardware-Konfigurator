import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

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
    private router: Router
  ) { }

  navigate(event): void {
    this.selectedStepIndex = event.selectedIndex;
    const url = this.steps[this.selectedStepIndex];
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
  }
}

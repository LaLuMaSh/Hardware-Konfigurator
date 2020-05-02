import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card-container',
  templateUrl: './content-card-container.component.html',
  styleUrls: ['./content-card-container.component.scss']
})
export class ContentCardContainerComponent implements OnInit {
  selected: string;
  canAdvance: boolean;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}

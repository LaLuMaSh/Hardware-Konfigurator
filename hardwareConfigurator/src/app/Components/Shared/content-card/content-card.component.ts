import { Component, Input, OnInit } from '@angular/core';
import { ContentCardContainerComponent } from '../content-card-container/content-card-container.component';
import { UniqueObject } from '../../../Models/cpus';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() obj: UniqueObject;
  @Input() container: ContentCardContainerComponent;
  @Input() saveKey: string;

  constructor() {
  }

  ngOnInit(): void {
    let item1 = localStorage.getItem(this.saveKey);
    if (item1 && (JSON.parse(item1) as UniqueObject).id === this.obj?.id) {
      this.container.selected = this.getCardId();
      this.container.canAdvance = true;
    }
  }

  show() {
    this.container.selected = this.getCardId();
    localStorage.setItem(this.saveKey, JSON.stringify(this.obj))
    this.container.canAdvance = true;
  }

  isSelected(): boolean {
    return this.container.selected === this.getCardId();
  }

  getCardId(): string {
    return 'card-' + this.saveKey + '-' + this.obj?.id
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardContainerComponent } from './content-card-container.component';

describe('ContentCardContainerComponent', () => {
  let component: ContentCardContainerComponent;
  let fixture: ComponentFixture<ContentCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

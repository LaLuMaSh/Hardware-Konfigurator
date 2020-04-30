import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveThroughProjectComponent } from './move-through-project.component';

describe('MoveThroughProjectComponent', () => {
  let component: MoveThroughProjectComponent;
  let fixture: ComponentFixture<MoveThroughProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveThroughProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveThroughProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

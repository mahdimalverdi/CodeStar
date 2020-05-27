import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundAnimationComponent } from './background-animation.component';

describe('BackgroundAnimationComponent', () => {
  let component: BackgroundAnimationComponent;
  let fixture: ComponentFixture<BackgroundAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

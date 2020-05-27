import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsCodeStarComponent } from './what-is-code-star.component';

describe('WhatIsCodeStarComponent', () => {
  let component: WhatIsCodeStarComponent;
  let fixture: ComponentFixture<WhatIsCodeStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsCodeStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsCodeStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

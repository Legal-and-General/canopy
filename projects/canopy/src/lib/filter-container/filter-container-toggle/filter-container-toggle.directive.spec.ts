import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { lgFilterContainerToggleDirective } from './filter-container-toggle.directive';

describe('lgFilterContainerToggleDirective', () => {
  let component: lgFilterContainerToggleDirective;
  let fixture: ComponentFixture<lgFilterContainerToggleDirective>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ lgFilterContainerToggleDirective ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(lgFilterContainerToggleDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgTabItemHeadingComponent } from './tab-item-heading.component';

describe('LgTabItemHeadingComponent', () => {
  let component: LgTabItemHeadingComponent;
  let fixture: ComponentFixture<LgTabItemHeadingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ LgTabItemHeadingComponent ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgTabItemHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

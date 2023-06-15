import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgCardContentInnerDataPointsComponent } from './card-content-inner-data-points.component';

describe('LgCardContentInnerDataPointsComponent', () => {
  let component: LgCardContentInnerDataPointsComponent;
  let fixture: ComponentFixture<LgCardContentInnerDataPointsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgCardContentInnerDataPointsComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardContentInnerDataPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-card-content-inner-data-points',
    );
  });
});

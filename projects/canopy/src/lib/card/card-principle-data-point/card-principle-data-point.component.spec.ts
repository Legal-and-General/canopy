import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgCardPrincipleDataPointComponent } from './card-principle-data-point.component';

describe('LgCardPrincipleDataPointComponent', () => {
  let component: LgCardPrincipleDataPointComponent;
  let fixture: ComponentFixture<LgCardPrincipleDataPointComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgCardPrincipleDataPointComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardPrincipleDataPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-card-principle-data-point',
    );
  });
});

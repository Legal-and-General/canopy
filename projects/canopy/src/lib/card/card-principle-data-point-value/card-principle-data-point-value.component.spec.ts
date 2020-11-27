import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgCardPrincipleDataPointValueComponent } from './card-principle-data-point-value.component';

describe('LgCardPrincipleDataPointValueComponent', () => {
  let component: LgCardPrincipleDataPointValueComponent;
  let fixture: ComponentFixture<LgCardPrincipleDataPointValueComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgCardPrincipleDataPointValueComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardPrincipleDataPointValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-card-principle-data-point-value',
    );
  });
});

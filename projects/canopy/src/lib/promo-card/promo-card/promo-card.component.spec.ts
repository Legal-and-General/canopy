import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgPromoCardComponent } from './promo-card.component';

describe('LgPromoCardComponent', () => {
  let component: LgPromoCardComponent;
  let fixture: ComponentFixture<LgPromoCardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ LgPromoCardComponent ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPromoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-promo-card');
  });

  it('should set the variant to the default value', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-promo-card--solid-white',
    );
  });

  it('should set the variant to the provided value', () => {
    component.variant = 'solid-green';
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-promo-card--solid-green',
    );
  });
});

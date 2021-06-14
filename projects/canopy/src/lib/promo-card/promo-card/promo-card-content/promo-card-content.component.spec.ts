import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgPromoCardContentComponent } from './promo-card-content.component';

describe('LgPromoCardContentComponent', () => {
  let component: LgPromoCardContentComponent;
  let fixture: ComponentFixture<LgPromoCardContentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgPromoCardContentComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPromoCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-promo-card-content',
    );
  });
});

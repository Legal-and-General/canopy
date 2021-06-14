import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgPromoCardListTitleComponent } from './promo-card-list-title.component';

describe('PromoCardListTitleComponent', () => {
  let component: LgPromoCardListTitleComponent;
  let fixture: ComponentFixture<LgPromoCardListTitleComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgPromoCardListTitleComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPromoCardListTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-promo-card-list-title',
    );
  });
});

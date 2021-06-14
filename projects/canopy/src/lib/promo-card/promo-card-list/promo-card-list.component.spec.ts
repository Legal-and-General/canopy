import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgPromoCardListComponent } from './promo-card-list.component';

describe('LgPromoCardListComponent', () => {
  let component: LgPromoCardListComponent;
  let fixture: ComponentFixture<LgPromoCardListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgPromoCardListComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPromoCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-promo-card-list');
  });
});

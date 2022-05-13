import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgPromoCardTitleComponent } from './promo-card-title.component';

describe('LgPromoCardTitleComponent', () => {
  let component: LgPromoCardTitleComponent;
  let fixture: ComponentFixture<LgPromoCardTitleComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ LgPromoCardTitleComponent ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPromoCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-promo-card-title');
  });
});

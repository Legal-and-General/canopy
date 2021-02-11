import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgPromoCardFooterComponent } from './promo-card-footer.component';

describe('LgPromoCardFooterComponent', () => {
  let component: LgPromoCardFooterComponent;
  let fixture: ComponentFixture<LgPromoCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LgPromoCardFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPromoCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

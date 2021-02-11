import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgPromoCardComponent } from './promo-card.component';

describe('LgPromoCardComponent', () => {
  let component: LgPromoCardComponent;
  let fixture: ComponentFixture<LgPromoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LgPromoCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPromoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

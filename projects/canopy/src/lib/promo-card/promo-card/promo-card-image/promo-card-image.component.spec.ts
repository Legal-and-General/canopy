import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgPromoCardImageComponent } from './promo-card-image.component';

describe('LgPromoCardImageComponent', () => {
  let component: LgPromoCardImageComponent;
  let fixture: ComponentFixture<LgPromoCardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LgPromoCardImageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPromoCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgPromoCardTitleComponent } from './promo-card-title.component';

describe('LgPromoCardTitleComponent', () => {
  let component: LgPromoCardTitleComponent;
  let fixture: ComponentFixture<LgPromoCardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LgPromoCardTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPromoCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

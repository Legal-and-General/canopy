import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgPromoCardHeaderComponent } from './promo-card-header.component';

describe('LgPromoCardHeaderComponent', () => {
  let component: LgPromoCardHeaderComponent;
  let fixture: ComponentFixture<LgPromoCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LgPromoCardHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPromoCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

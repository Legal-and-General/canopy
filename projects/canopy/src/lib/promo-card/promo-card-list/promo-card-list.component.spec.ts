import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgPromoCardListComponent } from './promo-card-list.component';

describe('LgPromoCardListComponent', () => {
  let component: LgPromoCardListComponent;
  let fixture: ComponentFixture<LgPromoCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LgPromoCardListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPromoCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

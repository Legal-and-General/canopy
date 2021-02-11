import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgPromoCardContentComponent } from './promo-card-content.component';

describe('LgPromoCardContentComponent', () => {
  let component: LgPromoCardContentComponent;
  let fixture: ComponentFixture<LgPromoCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LgPromoCardContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPromoCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

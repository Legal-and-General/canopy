import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCardComponent } from './promo-card.component';

describe('PromoCardComponent', () => {
  let component: PromoCardComponent;
  let fixture: ComponentFixture<PromoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromoCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

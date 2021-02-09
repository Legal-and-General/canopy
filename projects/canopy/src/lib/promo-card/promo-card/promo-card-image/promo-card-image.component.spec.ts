import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCardImageComponent } from './promo-card-image.component';

describe('PromoCardImageComponent', () => {
  let component: PromoCardImageComponent;
  let fixture: ComponentFixture<PromoCardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromoCardImageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

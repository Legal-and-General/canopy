import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCardFooterComponent } from './promo-card-footer.component';

describe('PromoCardFooterComponent', () => {
  let component: PromoCardFooterComponent;
  let fixture: ComponentFixture<PromoCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromoCardFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

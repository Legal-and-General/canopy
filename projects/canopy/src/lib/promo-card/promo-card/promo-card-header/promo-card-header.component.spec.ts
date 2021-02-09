import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCardHeaderComponent } from './promo-card-header.component';

describe('PromoCardHeaderComponent', () => {
  let component: PromoCardHeaderComponent;
  let fixture: ComponentFixture<PromoCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromoCardHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

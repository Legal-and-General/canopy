import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCardContentComponent } from './promo-card-content.component';

describe('PromoCardContentComponent', () => {
  let component: PromoCardContentComponent;
  let fixture: ComponentFixture<PromoCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromoCardContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

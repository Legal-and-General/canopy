import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCardListComponent } from './promo-card-list.component';

describe('PromoCardListComponent', () => {
  let component: PromoCardListComponent;
  let fixture: ComponentFixture<PromoCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromoCardListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

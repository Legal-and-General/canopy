import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgPromoCardFooterComponent } from './promo-card-footer.component';

describe('LgPromoCardFooterComponent', () => {
  let component: LgPromoCardFooterComponent;
  let fixture: ComponentFixture<LgPromoCardFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgPromoCardFooterComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPromoCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-promo-card-footer');
  });
});

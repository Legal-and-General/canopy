import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgHeroCardPrincipleDataPointComponent } from './hero-card-principle-data-point.component';

describe('LgHeroCardPrincipleDataPointComponent', () => {
  let component: LgHeroCardPrincipleDataPointComponent;
  let fixture: ComponentFixture<LgHeroCardPrincipleDataPointComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ LgHeroCardPrincipleDataPointComponent ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroCardPrincipleDataPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

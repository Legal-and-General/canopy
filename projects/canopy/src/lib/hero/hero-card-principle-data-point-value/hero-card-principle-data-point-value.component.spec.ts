import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgHeroCardPrincipleDataPointValueComponent } from './hero-card-principle-data-point-value.component';

describe('LgHeroCardPrincipleDataPointValueComponent', () => {
  let component: LgHeroCardPrincipleDataPointValueComponent;
  let fixture: ComponentFixture<LgHeroCardPrincipleDataPointValueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgHeroCardPrincipleDataPointValueComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroCardPrincipleDataPointValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

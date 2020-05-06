import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgHeroCardDataPointValueComponent } from './hero-card-data-point-value.component';

describe('HeroCardDataPointValueComponent', () => {
  let component: LgHeroCardDataPointValueComponent;
  let fixture: ComponentFixture<LgHeroCardDataPointValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgHeroCardDataPointValueComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroCardDataPointValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

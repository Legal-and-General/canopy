import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgHeroCardPrincipleDataPointValueComponent } from './hero-card-principle-data-point-value.component';

describe('LgHeroCardPrincipleDataPointValueComponent', () => {
  let component: LgHeroCardPrincipleDataPointValueComponent;
  let fixture: ComponentFixture<LgHeroCardPrincipleDataPointValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgHeroCardPrincipleDataPointValueComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(
      LgHeroCardPrincipleDataPointValueComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

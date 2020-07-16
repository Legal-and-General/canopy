import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgHeroCardComponent } from './hero-card.component';

describe('HeroCardComponent', () => {
  let component: LgHeroCardComponent;
  let fixture: ComponentFixture<LgHeroCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgHeroCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

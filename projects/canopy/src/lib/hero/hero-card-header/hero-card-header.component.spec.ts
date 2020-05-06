import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgHeroCardHeaderComponent } from './hero-card-header.component';

describe('HeroCardHeaderComponent', () => {
  let component: LgHeroCardHeaderComponent;
  let fixture: ComponentFixture<LgHeroCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgHeroCardHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

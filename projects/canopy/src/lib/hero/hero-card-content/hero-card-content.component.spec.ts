import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgHeroCardContentComponent } from './hero-card-content.component';

describe('HeroCardContentComponent', () => {
  let component: LgHeroCardContentComponent;
  let fixture: ComponentFixture<LgHeroCardContentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgHeroCardContentComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

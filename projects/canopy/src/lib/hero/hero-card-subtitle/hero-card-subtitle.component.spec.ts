import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgHeroCardSubtitleComponent } from './hero-card-subtitle.component';

describe('HeroCardSubtitleComponent', () => {
  let component: LgHeroCardSubtitleComponent;
  let fixture: ComponentFixture<LgHeroCardSubtitleComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgHeroCardSubtitleComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroCardSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

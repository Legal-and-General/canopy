import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgHeadingComponent } from '../../heading/heading.component';

import { LgHeroCardDataPointLabelComponent } from './hero-card-data-point-label.component';

describe('HeroCardDataPointLabelComponent', () => {
  let component: LgHeroCardDataPointLabelComponent;
  let fixture: ComponentFixture<LgHeroCardDataPointLabelComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ LgHeroCardDataPointLabelComponent, LgHeadingComponent ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroCardDataPointLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

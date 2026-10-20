import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockRender } from 'ng-mocks';

import { LgDataPointComponent } from '../../data-point';

import { LgHeroCardHeaderComponent } from './hero-card-header.component';

describe('HeroCardHeaderComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgHeroCardHeaderComponent, LgDataPointComponent ],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = MockRender('<lg-hero-card-header></lg-hero-card-header>');

    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it('projects a data point with a bound variant into the data slot', () => {
    const fixture = MockRender(
      `
        <lg-hero-card-header>
          <span>Title</span>
          <lg-data-point [variant]="dataPointVariant">Value</lg-data-point>
        </lg-hero-card-header>
      `,
      { dataPointVariant: 'card-principle' },
    );

    fixture.detectChanges();

    const dataSlot = fixture.nativeElement.querySelector('.lg-hero-card-header__data');
    const titleSlot = fixture.nativeElement.querySelector('.lg-hero-card-header__title');

    expect(dataSlot.querySelector('lg-data-point')).not.toBeNull();
    expect(dataSlot.querySelector('.lg-data-point--card-principle')).not.toBeNull();
    expect(titleSlot.textContent).toContain('Title');
    expect(titleSlot.querySelector('lg-data-point')).toBeNull();
  });
});

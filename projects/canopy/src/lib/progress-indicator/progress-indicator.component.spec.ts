import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgProgressIndicatorComponent } from './progress-indicator.component';

describe('LgProgressIndicatorComponent', () => {
  let component: LgProgressIndicatorComponent;
  let fixture: ComponentFixture<LgProgressIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgProgressIndicatorComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgProgressIndicatorComponent);
    component = fixture.componentInstance;
  });

  it('should render journeyTitleId', () => {
    component.journeyTitleId = 'New Journey title';
    fixture.detectChanges();

    const debugElement = fixture.debugElement;
    const journeyTitleIdElement = debugElement.query(By.css('.lg-progress-journey'));

    expect(journeyTitleIdElement.attributes['ng-reflect-journey-title-id']).toBe(
      'New Journey title',
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the progress bar with the correct value', () => {
    const hostElement = fixture.nativeElement;

    fixture.detectChanges();

    expect(hostElement.querySelector('lg-progress-bar')).toBeTruthy();
    expect(hostElement.querySelector('lg-progress-journey')).toBeTruthy();
  });

  it('should apply the correct CSS class', () => {
    const hostElement = fixture.nativeElement;

    fixture.detectChanges();

    expect(hostElement.classList.contains('lg-progress-indicator')).toBe(true);
  });

  it('should hide progress bar when showProgressBar is false', () => {
    component.showProgressBar = false;
    const hostElement = fixture.nativeElement;

    fixture.detectChanges();

    expect(hostElement.classList.contains('lg-progress-bar')).not.toBeTruthy();
  });

  it('should set the max input correctly', () => {
    const max = 100;

    component.max = max;

    expect(component.max).toBe(max);
  });

  it('should set the value input correctly', () => {
    const value = 50;

    component.value = value;

    expect(component.value).toBe(value);
  });

  it('should set displayAs input correctly', () => {
    const showAsPercentage = 'percentage';

    component.displayAs = showAsPercentage;

    expect(component.displayAs).toBe(showAsPercentage);
  });

  it('should set stepsPrefix input correctly', () => {
    const stepsPrefix = 'Custom Step';

    component.stepsPrefix = stepsPrefix;

    expect(component.stepsPrefix).toBe(stepsPrefix);
  });

  describe('accessibility', () => {
    it('should populate not specified', () => {
      fixture.detectChanges();

      const debugElement = fixture.debugElement;
      const journeyElement = debugElement.query(By.css('.lg-progress-journey'));

      expect(journeyElement.attributes['ng-reflect-journey-title-id']).toContain(
        'lg-progress-bar-journey-',
      );

      expect(journeyElement.attributes['ng-reflect-steps-text-id']).toContain(
        'lg-progress-bar-step-',
      );

      const barDebugEle = debugElement.query(By.css('.lg-progress-bar'));

      expect(barDebugEle.attributes['aria-labelledby']).toContain(
        'lg-progress-bar-journey-',
      );

      expect(barDebugEle.attributes['aria-labelledby']).toContain(
        'lg-progress-bar-step-',
      );
    });

    it('should render ariaLabelledByIds correctly when specified', () => {
      component.ariaLabelledByIds = 'New ariaLabelledByIds';
      fixture.detectChanges();

      const debugElement = fixture.debugElement;
      const journeyTitleIdElement = debugElement.query(By.css('.lg-progress-bar'));

      expect(journeyTitleIdElement.nativeElement.getAttribute('aria-labelledby')).toBe(
        'New ariaLabelledByIds',
      );
    });

    it('should render journeyTitleId correctly when specified', () => {
      component.journeyTitleId = 'New Journey title';
      fixture.detectChanges();

      const debugElement = fixture.debugElement;
      const journeyElement = debugElement.query(By.css('.lg-progress-journey'));

      expect(journeyElement.attributes['ng-reflect-journey-title-id']).toBe(
        'New Journey title',
      );
    });

    it('should render stepsTextId correctly when specified', () => {
      component.stepsTextId = 'New Step Text';
      fixture.detectChanges();

      const debugElement = fixture.debugElement;
      const journeyElement = debugElement.query(By.css('.lg-progress-journey'));

      expect(journeyElement.attributes['ng-reflect-steps-text-id']).toContain(
        'New Step Text',
      );
    });
  });
});

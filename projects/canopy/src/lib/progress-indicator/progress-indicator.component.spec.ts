import { ComponentFixture, TestBed } from '@angular/core/testing';

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

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct default values', () => {
    expect(component.max).toBe(0);
    expect(component.value).toBe(0);
    expect(component.showProgressBar).toBe(true);
    expect(component.displayAs).toBe('step');
    expect(component.stepsPrefix).toBe('Step');
  });

  it('should apply the correct CSS class', () => {
    const hostElement = fixture.nativeElement;

    fixture.detectChanges();

    expect(hostElement.classList.contains('lg-progress-indicator')).toBe(true);
  });

  it('should render the progress bar with the correct value', () => {
    const hostElement = fixture.nativeElement;

    fixture.detectChanges();

    expect(hostElement.querySelector('lg-progress-bar')).toBeTruthy();
  });

  it('should hide progressbar when showProgressBar is false', () => {
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
});

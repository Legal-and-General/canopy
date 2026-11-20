import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgProgressBarComponent } from './progress-bar.component';

describe('LgProgressBarComponent', () => {
  let component: LgProgressBarComponent;
  let fixture: ComponentFixture<LgProgressBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgProgressBarComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgProgressBarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the role progressbar', () => {
    const progressBarElement: HTMLElement =
      fixture.nativeElement.querySelector('.lg-progress-bar');

    expect(progressBarElement.getAttribute('role')).toBe('progressbar');
  });

  it('adds a class to the progress bar', () => {
    const progressBarElement: HTMLElement =
      fixture.nativeElement.querySelector('.lg-progress-bar');

    expect(progressBarElement.classList.contains('lg-progress-bar')).toBe(true);
  });

  it('should set aria-label correctly', () => {
    const ariaLabel = 'Aria label for progress bar';

    component.ariaLabel = ariaLabel;
    fixture.detectChanges();
    const progressBarElement: HTMLElement =
      fixture.nativeElement.querySelector('.lg-progress-bar');

    expect(progressBarElement.getAttribute('aria-label')).toBe(ariaLabel);
  });

  it('should set aria-labelledby correctly', () => {
    const ariaLabelledBy = 'ariaLabelledBy';

    component.ariaLabelledBy = ariaLabelledBy;
    fixture.detectChanges();
    const progressBarElement: HTMLElement =
      fixture.nativeElement.querySelector('.lg-progress-bar');

    expect(progressBarElement.getAttribute('aria-labelledby')).toBe(ariaLabelledBy);
  });

  it('should set aria-valuemax correctly', () => {
    const max = 4;

    component.max = max;
    fixture.detectChanges();

    const progressBarElement: HTMLElement =
      fixture.nativeElement.querySelector('.lg-progress-bar');

    expect(progressBarElement.getAttribute('aria-valuemax')).toBe(max.toString());
  });

  it('should set aria-valuemin correctly', () => {
    const progressBarElement: HTMLElement =
      fixture.nativeElement.querySelector('.lg-progress-bar');

    expect(progressBarElement.getAttribute('aria-valuemin')).toBe('0');
  });

  it('should set aria-valuenow correctly', () => {
    const value = 3;

    component.value = value;
    fixture.detectChanges();
    const progressBarElement: HTMLElement =
      fixture.nativeElement.querySelector('.lg-progress-bar');

    expect(progressBarElement.getAttribute('aria-valuenow')).toBe(value.toString());
  });

  it('should set aria-live correctly', () => {
    const isAriaLiveRegion = true;

    component.isAriaLiveRegion = isAriaLiveRegion;
    fixture.detectChanges();
    const progressBarElement: HTMLElement =
      fixture.nativeElement.querySelector('.lg-progress-bar');

    expect(progressBarElement.getAttribute('aria-live')).toBe('polite');
  });

  it('should set [style.width.%] correctly', () => {
    const value = 30;
    const max = 100;

    component.value = value;
    component.max = max;
    fixture.detectChanges();

    const progressBarBarElement: HTMLElement = fixture.nativeElement.querySelector(
      '.lg-progress-bar__bar',
    );

    const expectedWidth = '30%';

    expect(progressBarBarElement.style.width).toBe(expectedWidth);
  });

  it.each([
    { value: 1, max: 4, filledWidth: '25%', trackWidth: '75%' },
    { value: 30, max: 100, filledWidth: '30%', trackWidth: '70%' },
  ])(
    'renders proportional segments for $value of $max',
    ({ value, max, filledWidth, trackWidth }) => {
      fixture.componentRef.setInput('value', value);
      fixture.componentRef.setInput('max', max);
      fixture.detectChanges();

      const fill: HTMLElement = fixture.nativeElement.querySelector(
        '.lg-progress-bar__bar',
      );
      const track: HTMLElement = fixture.nativeElement.querySelector(
        '.lg-progress-bar__track',
      );

      expect(fill.style.width).toBe(filledWidth);
      expect(track.style.width).toBe(trackWidth);
      expect(track.getAttribute('aria-hidden')).toBe('true');
    },
  );

  it.each([
    { value: 0, max: 100 },
    { value: 1, max: 0 },
    { value: 1, max: -1 },
  ])('renders only the full-width track for $value of $max', ({ value, max }) => {
    fixture.componentRef.setInput('value', value);
    fixture.componentRef.setInput('max', max);
    fixture.detectChanges();

    const track: HTMLElement = fixture.nativeElement.querySelector(
      '.lg-progress-bar__track',
    );

    expect(fixture.nativeElement.querySelector('.lg-progress-bar__bar')).toBeNull();
    expect(track.style.width).toBe('100%');
  });

  it.each([ 100, 120 ])('renders only the full-width fill at %s%%', value => {
    fixture.componentRef.setInput('value', value);
    fixture.componentRef.setInput('max', 100);
    fixture.detectChanges();

    const fill: HTMLElement = fixture.nativeElement.querySelector(
      '.lg-progress-bar__bar',
    );

    expect(fill.style.width).toBe('100%');
    expect(fixture.nativeElement.querySelector('.lg-progress-bar__track')).toBeNull();
  });

  it('updates segments when moving between empty, partial and complete progress', () => {
    fixture.componentRef.setInput('max', 100);

    for (const value of [ 0, 50, 100, 50, 0 ]) {
      fixture.componentRef.setInput('value', value);
      fixture.detectChanges();

      const fill: HTMLElement | null = fixture.nativeElement.querySelector(
        '.lg-progress-bar__bar',
      );
      const track: HTMLElement | null = fixture.nativeElement.querySelector(
        '.lg-progress-bar__track',
      );

      expect(fill?.style.width ?? null).toBe(value > 0
        ? `${value}%`
        : null);

      expect(track?.style.width ?? null).toBe(value < 100
        ? `${100 - value}%`
        : null);
    }
  });
});

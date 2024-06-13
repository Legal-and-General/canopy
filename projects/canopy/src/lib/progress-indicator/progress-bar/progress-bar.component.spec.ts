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

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set aria-label correctly', () => {
    const ariaLabel = 'Aria label for progress bar';

    component.ariaLabel = ariaLabel;
    fixture.detectChanges();
    const progressBarElement: HTMLElement =
      fixture.nativeElement.querySelector('.lg-progress-bar');

    expect(progressBarElement.getAttribute('aria-label')).toBe(ariaLabel);
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
    const min = 2;

    component.value = min;
    fixture.detectChanges();
    const progressBarElement: HTMLElement =
      fixture.nativeElement.querySelector('.lg-progress-bar');

    expect(progressBarElement.getAttribute('aria-valuemin')).toBe(min.toString());
  });

  it('should set aria-valuenow correctly', () => {
    const value = 3;

    component.value = value;
    fixture.detectChanges();
    const progressBarElement: HTMLElement =
      fixture.nativeElement.querySelector('.lg-progress-bar');

    expect(progressBarElement.getAttribute('aria-valuenow')).toBe(value.toString());
  });

  it('should have the class lg-progress-bar', () => {
    const progressBarElement: HTMLElement =
      fixture.nativeElement.querySelector('.lg-progress-bar');

    expect(progressBarElement.classList.contains('lg-progress-bar')).toBe(true);
  });

  it('should have the role progressbar', () => {
    const progressBarElement: HTMLElement =
      fixture.nativeElement.querySelector('.lg-progress-bar');

    expect(progressBarElement.getAttribute('role')).toBe('progressbar');
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
});

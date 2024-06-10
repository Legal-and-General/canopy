import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgProgressJourneyComponent } from './progress-journey.component';

describe('LgProgressJourneyComponent', () => {
  let component: LgProgressJourneyComponent;
  let fixture: ComponentFixture<LgProgressJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgProgressJourneyComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgProgressJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate percentage correctly', () => {
    component.max = 100;
    component.value = 50;

    expect(component.percentage).toEqual(50);
  });

  it('should display the maximum percentage to be 100', () => {
    component.max = 2;
    component.value = 3;

    expect(component.percentage).toEqual(100);
  });

  it('should display the minimum percentage to be 0', () => {
    component.max = 0;
    component.value = 0;

    expect(component.percentage).toEqual(0);
  });

  it('should display steps when showAsPercentage is false', () => {
    component.showAsPercentage = false;
    fixture.detectChanges();
    const stepsElement = fixture.debugElement.query(
      By.css('.lg-progress-journey-content'),
    );

    expect(stepsElement.nativeElement.textContent).toContain(
      `${component.stepsPrefix} ${component.value} of ${component.max}`,
    );
  });

  it('should display percentage when showAsPercentage is true', () => {
    component.showAsPercentage = true;
    component.max = 5;
    component.value = 3;
    fixture.detectChanges();
    const percentageElement = fixture.debugElement.query(
      By.css('.lg-progress-journey-content'),
    );

    expect(percentageElement.nativeElement.textContent).toContain('60%');
  });
});

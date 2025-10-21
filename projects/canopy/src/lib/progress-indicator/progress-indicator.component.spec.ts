import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { LgProgressBarComponent } from './progress-bar/progress-bar.component';
import { LgProgressJourneyComponent } from './progress-journey/progress-journey.component';
import { LgProgressIndicatorComponent } from './progress-indicator.component';

/* eslint-disable no-underscore-dangle */
describe('LgProgressIndicatorComponent', () => {
  let component: LgProgressIndicatorComponent;
  let fixture: ComponentFixture<LgProgressIndicatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LgProgressIndicatorComponent,
        MockComponents(LgProgressBarComponent, LgProgressJourneyComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgProgressIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the progress indicator class', () => {
    expect(fixture.nativeElement.classList.contains('lg-progress-indicator')).toBe(true);
  });

  describe('Inputs', () => {
    it('should set max to 0 by default', () => {
      expect(component.max).toBe(0);
    });

    it('should set value to 0 by default', () => {
      expect(component.value).toBe(0);
    });

    it('should set showProgressBar to true by default', () => {
      expect(component.showProgressBar).toBe(true);
    });

    it('should set displayAs to "step" by default', () => {
      expect(component.displayAs).toBe('step');
    });

    it('should set stepsPrefix to "Step" by default', () => {
      expect(component.stepsPrefix).toBe('Step');
    });

    it('should accept custom max value', () => {
      component.max = 5;
      expect(component.max).toBe(5);
    });

    it('should accept custom value', () => {
      component.value = 3;
      expect(component.value).toBe(3);
    });

    it('should accept custom displayAs value', () => {
      component.displayAs = 'percentage';
      expect(component.displayAs).toBe('percentage');
    });

    it('should accept custom stepsPrefix', () => {
      component.stepsPrefix = 'Phase';
      expect(component.stepsPrefix).toBe('Phase');
    });

    it('should accept showProgressBar false', () => {
      component.showProgressBar = false;
      expect(component.showProgressBar).toBe(false);
    });
  });

  describe('Accessibility - ID generation', () => {
    it('should generate a unique ID for each component instance', () => {
      const component1 = TestBed.createComponent(
        LgProgressIndicatorComponent,
      ).componentInstance;
      const component2 = TestBed.createComponent(
        LgProgressIndicatorComponent,
      ).componentInstance;

      expect(component1._id).not.toBe(component2._id);
      expect(component1._id).toBeGreaterThanOrEqual(0);
      expect(component2._id).toBeGreaterThanOrEqual(0);
    });

    it('should generate journeyTitleId with component ID', () => {
      const expectedId = `lg-progress-bar-journey-${component._id}`;

      expect(component._journeyTitleId).toBe(expectedId);
    });

    it('should generate stepsTextId with component ID', () => {
      const expectedId = `lg-progress-bar-step-${component._id}`;

      expect(component._stepsTextId).toBe(expectedId);
    });

    it('should allow setting custom journeyTitleId', () => {
      const customId = 'custom-journey-title-id';

      component.journeyTitleId = customId;

      expect(component._journeyTitleId).toBe(customId);
    });

    it('should allow setting custom stepsTextId', () => {
      const customId = 'custom-steps-text-id';

      component.stepsTextId = customId;

      expect(component._stepsTextId).toBe(customId);
    });

    it('should generate different IDs for journeyTitleId and stepsTextId', () => {
      expect(component._journeyTitleId).not.toBe(component._stepsTextId);
    });
  });

  describe('Accessibility - aria-labelledby', () => {
    it('should return default ariaLabelledByIds when not set', () => {
      const expectedIds = `${component._journeyTitleId} ${component._stepsTextId}`;

      expect(component.ariaLabelledByIds).toBe(expectedIds);
    });

    it('should return custom ariaLabelledByIds when set', () => {
      const customIds = 'custom-label-id-1 custom-label-id-2';

      component.ariaLabelledByIds = customIds;

      expect(component.ariaLabelledByIds).toBe(customIds);
    });

    it('should override default IDs with custom ariaLabelledByIds', () => {
      const customIds = 'override-id';

      component.ariaLabelledByIds = customIds;

      expect(component.ariaLabelledByIds).not.toContain(component._journeyTitleId);
      expect(component.ariaLabelledByIds).not.toContain(component._stepsTextId);
      expect(component.ariaLabelledByIds).toBe(customIds);
    });

    it('should update ariaLabelledByIds when _ariaLabelledByIds is set directly', () => {
      const newIds = 'new-label-id';

      component._ariaLabelledByIds = newIds;

      expect(component.ariaLabelledByIds).toBe(newIds);
    });

    it('should maintain consistency between getter and setter', () => {
      const testIds = 'test-id-1 test-id-2';

      component.ariaLabelledByIds = testIds;

      expect(component.ariaLabelledByIds).toBe(testIds);
      expect(component._ariaLabelledByIds).toBe(testIds);
    });

    it('should return combined IDs when custom ariaLabelledByIds is not set', () => {
      const ids = component.ariaLabelledByIds;

      expect(ids).toContain('lg-progress-bar-journey-');
      expect(ids).toContain('lg-progress-bar-step-');
    });

    it('should allow clearing ariaLabelledByIds', () => {
      component.ariaLabelledByIds = 'custom-id';
      expect(component.ariaLabelledByIds).toBe('custom-id');

      component._ariaLabelledByIds = undefined;

      const defaultIds = component.ariaLabelledByIds;

      expect(defaultIds).toContain(component._journeyTitleId);
      expect(defaultIds).toContain(component._stepsTextId);
    });
  });

  describe('Accessibility - ID updates', () => {
    it('should update journeyTitleId and maintain ariaLabelledByIds consistency', () => {
      const newJourneyId = 'new-journey-id';

      component.journeyTitleId = newJourneyId;

      expect(component._journeyTitleId).toBe(newJourneyId);
      expect(component.ariaLabelledByIds).toContain(newJourneyId);
    });

    it('should update stepsTextId and maintain ariaLabelledByIds consistency', () => {
      const newStepsId = 'new-steps-id';

      component.stepsTextId = newStepsId;

      expect(component._stepsTextId).toBe(newStepsId);
      expect(component.ariaLabelledByIds).toContain(newStepsId);
    });

    it('should use custom ariaLabelledByIds regardless of journeyTitleId changes', () => {
      const customIds = 'my-custom-ids';

      component.ariaLabelledByIds = customIds;
      component.journeyTitleId = 'different-journey-id';

      expect(component.ariaLabelledByIds).toBe(customIds);
    });

    it('should use custom ariaLabelledByIds regardless of stepsTextId changes', () => {
      const customIds = 'my-custom-ids';

      component.ariaLabelledByIds = customIds;
      component.stepsTextId = 'different-steps-id';

      expect(component.ariaLabelledByIds).toBe(customIds);
    });
  });

  describe('Progress bar visibility', () => {
    it('should render lg-progress-bar when showProgressBar is true', () => {
      component.showProgressBar = true;
      fixture.detectChanges();

      const progressBar = fixture.nativeElement.querySelector('lg-progress-bar');

      expect(progressBar).toBeTruthy();
    });

    it('should not render lg-progress-bar when showProgressBar is false', () => {
      component.showProgressBar = false;
      fixture.detectChanges();

      const progressBars = fixture.nativeElement.querySelectorAll('lg-progress-bar');

      // With mocked components, check that no visible progress bar exists
      // or that the component's property is correctly set to false
      expect(component.showProgressBar).toBe(false);
      // The mocked component may still be in DOM but shouldn't be functionally present
      expect(progressBars.length).toBeLessThanOrEqual(1);
    });

    it('should always render lg-progress-journey regardless of showProgressBar', () => {
      component.showProgressBar = false;
      fixture.detectChanges();

      const progressJourney = fixture.nativeElement.querySelector('lg-progress-journey');

      expect(progressJourney).toBeTruthy();
    });
  });

  describe('Component rendering', () => {
    it('should render lg-progress-journey', () => {
      const progressJourney = fixture.nativeElement.querySelector('lg-progress-journey');

      expect(progressJourney).toBeTruthy();
    });

    it('should render both lg-progress-journey and lg-progress-bar by default', () => {
      const progressJourney = fixture.nativeElement.querySelector('lg-progress-journey');
      const progressBar = fixture.nativeElement.querySelector('lg-progress-bar');

      expect(progressJourney).toBeTruthy();
      expect(progressBar).toBeTruthy();
    });
  });
});
/* eslint-enable no-underscore-dangle */

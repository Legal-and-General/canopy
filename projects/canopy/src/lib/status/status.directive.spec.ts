import { Component, DebugElement, ElementRef, Input, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgAlertComponent } from '../alert/alert.component';
import { LgBannerComponent } from '../banner/banner.component';
import { LgCardComponent } from '../card/card.component';
import { LgDetailsComponent } from '../details/details.component';
import { LgDetailsPanelHeadingComponent } from '../details/details-panel-heading/details-panel-heading.component';
import { LgValidationComponent } from '../forms/validation/validation.component';

import { LgStatusDirective } from './status.directive';
import type { Status, Theme } from './status.interface';

@Component({
  template:
    ' <lg-banner [status]="lgStatus" [statusTheme]="lgStatusTheme">Test</lg-banner> ',
  imports: [ LgBannerComponent ],
})
class TestComponent {
  @Input() lgStatus: Status = 'generic';
  @Input() lgStatusTheme: Theme = 'neutral';
}

@Component({
  template: `
    <div class="lg-mode-blue lg-theme-bold">
      <lg-banner [status]="lgStatus">Test</lg-banner>
    </div>
  `,
  imports: [ LgBannerComponent ],
})
class TestComponentWithColourMode {
  @Input() lgStatus: Status = 'generic';
}

describe('LgStatus', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;
  let component: TestComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ TestComponent ],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;

    testElement = fixture.debugElement.query(By.css('lg-banner'));

    fixture.detectChanges();
  }));

  describe('status classes with default neutral theme', () => {
    it('adds the generic status class', () => {
      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-generic');
      expect(classes).toContain('lg-theme-neutral');
    });

    it('adds the info status class', () => {
      component.lgStatus = 'info';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-info');
      expect(classes).toContain('lg-theme-neutral');
    });

    it('adds the success status class', () => {
      component.lgStatus = 'success';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-success');
      expect(classes).toContain('lg-theme-neutral');
    });

    it('adds the warning status class', () => {
      component.lgStatus = 'warning';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-warning');
      expect(classes).toContain('lg-theme-neutral');
    });

    it('adds the error status class', () => {
      component.lgStatus = 'error';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-error');
      expect(classes).toContain('lg-theme-neutral');
    });

    it('removes the old status class when status changes', () => {
      component.lgStatus = 'info';
      fixture.detectChanges();

      let classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-info');

      component.lgStatus = 'success';
      fixture.detectChanges();

      classes = testElement.nativeElement.getAttribute('class');

      expect(classes).not.toContain('lg-status-info');
      expect(classes).toContain('lg-status-success');
    });
  });

  describe('status classes (with different themes)', () => {
    it('adds status and theme classes when theme is provided', () => {
      component.lgStatus = 'info';
      component.lgStatusTheme = 'bold';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-info');
      expect(classes).toContain('lg-theme-bold');
    });

    it('applies correct status class for each status with theme', () => {
      const statuses: Array<Status> = [ 'generic', 'info', 'success', 'warning', 'error' ];

      statuses.forEach(status => {
        component.lgStatus = status;
        component.lgStatusTheme = 'neutral';
        fixture.detectChanges();

        const classes = testElement.nativeElement.getAttribute('class');

        expect(classes).toContain(`lg-status-${status}`);
        expect(classes).toContain('lg-theme-neutral');
      });
    });

    it('applies correct theme class for each theme type', () => {
      const themes: Array<Theme> = [ 'neutral', 'neutral-inverse', 'subtle', 'bold' ];

      themes.forEach(theme => {
        component.lgStatus = 'info';
        component.lgStatusTheme = theme;
        fixture.detectChanges();

        const classes = testElement.nativeElement.getAttribute('class');

        expect(classes).toContain('lg-status-info');
        expect(classes).toContain(`lg-theme-${theme}`);
      });
    });

    it('updates theme while keeping status', () => {
      component.lgStatus = 'success';
      component.lgStatusTheme = 'neutral';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-status-success',
      );

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-theme-neutral',
      );

      // Change theme
      component.lgStatusTheme = 'bold';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-success');
      expect(classes).not.toContain('lg-theme-neutral');
      expect(classes).toContain('lg-theme-bold');
    });

    it('updates status while keeping theme', () => {
      component.lgStatus = 'info';
      component.lgStatusTheme = 'subtle';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain('lg-status-info');

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-theme-subtle',
      );

      // Change status
      component.lgStatus = 'warning';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).not.toContain('lg-status-info');
      expect(classes).toContain('lg-status-warning');
      expect(classes).toContain('lg-theme-subtle');
    });
  });

  describe('theme inheritance from colour mode container', () => {
    let colourModeFixture: ComponentFixture<TestComponentWithColourMode>;
    let colourModeComponent: TestComponentWithColourMode;
    let statusElement: DebugElement;

    beforeEach(waitForAsync(() => {
      colourModeFixture = TestBed.createComponent(TestComponentWithColourMode);
      colourModeComponent = colourModeFixture.componentInstance;

      statusElement = colourModeFixture.debugElement.query(
        By.directive(LgStatusDirective),
      );

      colourModeFixture.detectChanges();
    }));

    it('should inherit theme from parent colour mode container', () => {
      const classes = statusElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-generic');
      expect(classes).toContain('lg-theme-bold');
    });

    it('should inherit theme for different status types', () => {
      colourModeComponent.lgStatus = 'info';
      colourModeFixture.detectChanges();

      const classes = statusElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-info');
      expect(classes).toContain('lg-theme-bold');
    });

    it('should not allow explicit theme to override inherited theme', () => {
      // Update the template to include explicit theme
      TestBed.resetTestingModule();

      TestBed.configureTestingModule({
        imports: [],
      });

      @Component({
        template: `
          <div class="lg-mode-blue lg-theme-bold">
            <lg-banner [status]="'info'" [statusTheme]="'neutral'">Test</lg-banner>
          </div>
        `,
        imports: [ LgBannerComponent ],
      })
      class TestOverrideComponent {}

      const overrideFixture = TestBed.createComponent(TestOverrideComponent);

      overrideFixture.detectChanges();

      const overrideElement = overrideFixture.debugElement.query(
        By.directive(LgStatusDirective),
      );

      const classes = overrideElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-info');
      expect(classes).toContain('lg-theme-bold');
      expect(classes).not.toContain('lg-theme-neutral');
    });

    it('should update inherited theme when parent container theme changes', done => {
      TestBed.resetTestingModule();

      TestBed.configureTestingModule({
        imports: [],
      });

      @Component({
        template: `
          <div #container class="lg-mode-blue lg-theme-bold">
            <lg-banner status="generic">Test</lg-banner>
          </div>
        `,
        imports: [ LgBannerComponent ],
      })
      class DynamicThemeTestComponent {
        @ViewChild('container', { read: ElementRef }) container!: ElementRef;
      }

      const dynamicFixture = TestBed.createComponent(DynamicThemeTestComponent);
      const dynamicComponent = dynamicFixture.componentInstance;

      dynamicFixture.detectChanges();

      const dynamicElement = dynamicFixture.debugElement.query(
        By.directive(LgStatusDirective),
      );

      let classes = dynamicElement.nativeElement.getAttribute('class');

      // Initially should inherit bold from parent
      expect(classes).toContain('lg-status-generic');
      expect(classes).toContain('lg-theme-bold');

      // Change parent container theme by updating classList directly
      const containerEl = dynamicComponent.container.nativeElement as HTMLElement;

      containerEl.classList.remove('lg-theme-bold');
      containerEl.classList.add('lg-theme-subtle');
      dynamicFixture.detectChanges();

      // Wait for MutationObserver to trigger
      setTimeout(() => {
        classes = dynamicElement.nativeElement.getAttribute('class');

        expect(classes).toContain('lg-theme-subtle');
        expect(classes).not.toContain('lg-theme-bold');
        done();
      }, 50);
    });

    it('should disconnect MutationObserver when directive is destroyed', () => {
      const directiveInstance = statusElement.injector.get(LgStatusDirective);
      const disconnectSpy = jest.spyOn(
        directiveInstance['mutationObserver'],
        'disconnect',
      );

      colourModeFixture.destroy();

      expect(disconnectSpy).toHaveBeenCalled();
    });

    it('should not throw error on destroy if no MutationObserver exists', () => {
      TestBed.resetTestingModule();

      TestBed.configureTestingModule({
        imports: [],
      });

      @Component({
        template:
          '<lg-banner [status]="status" [statusTheme]="statusTheme">Test</lg-banner>',
        imports: [ LgBannerComponent ],
      })
      class NoObserverComponent {
        status = 'info';
        statusTheme = 'neutral';
      }

      const noObserverFixture = TestBed.createComponent(NoObserverComponent);

      noObserverFixture.detectChanges();

      // Should not throw when destroying a directive with explicit theme (no observer)
      expect(() => noObserverFixture.destroy()).not.toThrow();
    });
  });

  describe('component validation', () => {
    it('should not throw error when used on lg-banner', () => {
      @Component({
        template: '<lg-banner status="info">Test</lg-banner>',
        imports: [ LgBannerComponent ],
      })
      class TestBannerComponent {}

      expect(() => {
        const bannerFixture = TestBed.createComponent(TestBannerComponent);

        bannerFixture.detectChanges();
      }).not.toThrow();
    });

    it('should not throw error when used on lg-alert', () => {
      @Component({
        template: '<lg-alert status="info">Test</lg-alert>',
        imports: [ LgAlertComponent ],
      })
      class TestAlertComponent {}

      expect(() => {
        const alertFixture = TestBed.createComponent(TestAlertComponent);

        alertFixture.detectChanges();
      }).not.toThrow();
    });

    it('should not throw error when used on lg-details', () => {
      @Component({
        template: `
          <lg-details status="info">
            <lg-details-panel-heading>Test</lg-details-panel-heading>
            <p>Content</p>
          </lg-details>
        `,
        imports: [ LgDetailsComponent, LgDetailsPanelHeadingComponent ],
      })
      class TestDetailsComponent {}

      expect(() => {
        const detailsFixture = TestBed.createComponent(TestDetailsComponent);

        detailsFixture.detectChanges();
      }).not.toThrow();
    });

    it('should not throw error when used on lg-validation', () => {
      @Component({
        template: '<lg-validation status="error">Test error</lg-validation>',
        imports: [ LgValidationComponent ],
      })
      class TestValidationComponent {}

      expect(() => {
        const validationFixture = TestBed.createComponent(TestValidationComponent);

        validationFixture.detectChanges();
      }).not.toThrow();
    });

    it('should throw error when used on a div', () => {
      @Component({
        template: '<div lgStatus="info">Test</div>',
        imports: [ LgStatusDirective ],
      })
      class TestDivComponent {}

      expect(() => {
        const divFixture = TestBed.createComponent(TestDivComponent);

        divFixture.detectChanges();
      }).toThrow(
        new Error(
          'lgStatus directive can only be used on the following components: lg-banner, lg-alert, lg-details, lg-validation. Current element: div',
        ),
      );
    });

    it('should throw error when used on lg-card', () => {
      @Component({
        template: '<lg-card lgStatus="info">Test</lg-card>',
        imports: [ LgCardComponent, LgStatusDirective ],
      })
      class TestCardComponent {}

      expect(() => {
        const cardFixture = TestBed.createComponent(TestCardComponent);

        cardFixture.detectChanges();
      }).toThrow(
        new Error(
          'lgStatus directive can only be used on the following components: lg-banner, lg-alert, lg-details, lg-validation. Current element: lg-card',
        ),
      );
    });
  });
});

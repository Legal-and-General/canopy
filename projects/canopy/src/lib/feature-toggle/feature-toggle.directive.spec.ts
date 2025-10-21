import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

import { LgFeatureToggleDirective } from './feature-toggle.directive';
import { LgFeatureToggleService } from './feature-toggle.service';
import {
  LgFeatureToggleConfig,
  LgFeatureToggleOptions,
  togglesOptionsInjectable,
} from './feature-toggle.interface';

@Component({
  template: `
    <div *lgFeatureToggle="'testFeature'" data-test="content">Test content</div>
  `,
  standalone: true,
  imports: [ LgFeatureToggleDirective ],
})
class TestComponent {}

describe('LgFeatureToggleDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let togglesSubject: BehaviorSubject<LgFeatureToggleConfig>;
  let mockFeatureToggleService: { toggles$: BehaviorSubject<LgFeatureToggleConfig> };

  beforeEach(() => {
    togglesSubject = new BehaviorSubject<LgFeatureToggleConfig>({});

    mockFeatureToggleService = {
      toggles$: togglesSubject,
    };

    TestBed.configureTestingModule({
      imports: [ TestComponent, LgFeatureToggleDirective ],
      providers: [
        { provide: LgFeatureToggleService, useValue: mockFeatureToggleService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
  });

  describe('when feature toggle is enabled', () => {
    it('should render the content', () => {
      togglesSubject.next({ testFeature: true });
      fixture.detectChanges();

      const contentElement = fixture.debugElement.query(By.css('[data-test="content"]'));

      expect(contentElement).toBeTruthy();
      expect(contentElement.nativeElement.textContent.trim()).toBe('Test content');
    });
  });

  describe('when feature toggle is disabled', () => {
    it('should not render the content', () => {
      togglesSubject.next({ testFeature: false });
      fixture.detectChanges();

      const contentElement = fixture.debugElement.query(By.css('[data-test="content"]'));

      expect(contentElement).toBeNull();
    });
  });

  describe('when feature toggle is undefined', () => {
    it('should render the content by default', () => {
      togglesSubject.next({});
      fixture.detectChanges();

      const contentElement = fixture.debugElement.query(By.css('[data-test="content"]'));

      expect(contentElement).toBeTruthy();
      expect(contentElement.nativeElement.textContent.trim()).toBe('Test content');
    });

    it('should not render content when defaultHide option is set', () => {
      TestBed.resetTestingModule();

      TestBed.configureTestingModule({
        imports: [ TestComponent, LgFeatureToggleDirective ],
        providers: [
          { provide: LgFeatureToggleService, useValue: mockFeatureToggleService },
          {
            provide: togglesOptionsInjectable,
            useValue: { defaultHide: true } as LgFeatureToggleOptions,
          },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      togglesSubject.next({});
      fixture.detectChanges();

      const contentElement = fixture.debugElement.query(By.css('[data-test="content"]'));

      expect(contentElement).toBeNull();
    });
  });

  describe('when toggle state changes', () => {
    it('should show content when toggle changes from false to true', () => {
      togglesSubject.next({ testFeature: false });
      fixture.detectChanges();

      let contentElement = fixture.debugElement.query(By.css('[data-test="content"]'));

      expect(contentElement).toBeNull();

      togglesSubject.next({ testFeature: true });
      fixture.detectChanges();

      contentElement = fixture.debugElement.query(By.css('[data-test="content"]'));
      expect(contentElement).toBeTruthy();
    });

    it('should hide content when toggle changes from true to false', () => {
      togglesSubject.next({ testFeature: true });
      fixture.detectChanges();

      let contentElement = fixture.debugElement.query(By.css('[data-test="content"]'));

      expect(contentElement).toBeTruthy();

      togglesSubject.next({ testFeature: false });
      fixture.detectChanges();

      contentElement = fixture.debugElement.query(By.css('[data-test="content"]'));
      expect(contentElement).toBeNull();
    });
  });

  describe('subscription cleanup', () => {
    it('should unsubscribe on destroy', () => {
      togglesSubject.next({ testFeature: true });
      fixture.detectChanges();

      const directiveElements = fixture.debugElement.queryAllNodes(
        By.directive(LgFeatureToggleDirective),
      );
      const directive = directiveElements[0].injector.get(LgFeatureToggleDirective);

      const unsubscribeSpy = jest.spyOn(directive.subscription, 'unsubscribe');

      fixture.destroy();

      expect(unsubscribeSpy).toHaveBeenCalled();
    });

    it('should handle destroy when subscription is undefined', () => {
      fixture.detectChanges();

      const directiveElements = fixture.debugElement.queryAllNodes(
        By.directive(LgFeatureToggleDirective),
      );
      const directive = directiveElements[0].injector.get(LgFeatureToggleDirective);

      directive.subscription = undefined;

      expect(() => {
        fixture.destroy();
      }).not.toThrow();
    });
  });

  describe('setOptions method', () => {
    it('should allow setting options programmatically', () => {
      togglesSubject.next({});
      fixture.detectChanges();

      const directiveElements = fixture.debugElement.queryAllNodes(
        By.directive(LgFeatureToggleDirective),
      );
      const directive = directiveElements[0].injector.get(LgFeatureToggleDirective);

      const newOptions: LgFeatureToggleOptions = { defaultHide: true };

      directive.setOptions(newOptions);

      expect(directive['options']).toEqual(newOptions);
    });
  });

  describe('view container behavior', () => {
    it('should clear view before creating embedded view when toggle changes', () => {
      // Initialize the component first so the directive is created
      fixture.detectChanges();

      // Get the directive reference - use queryAllNodes to find structural directives
      const directiveElements = fixture.debugElement.queryAllNodes(
        By.directive(LgFeatureToggleDirective),
      );
      const directive = directiveElements[0].injector.get(LgFeatureToggleDirective);

      const clearSpy = jest.spyOn(directive['viewContainer'], 'clear');
      const createSpy = jest.spyOn(directive['viewContainer'], 'createEmbeddedView');

      // Now set the toggle to true to trigger the directive logic
      togglesSubject.next({ testFeature: true });
      fixture.detectChanges();

      expect(clearSpy).toHaveBeenCalled();
      expect(createSpy).toHaveBeenCalled();
    });
  });
});

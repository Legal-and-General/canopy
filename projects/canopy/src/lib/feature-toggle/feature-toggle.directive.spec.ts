import { TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LgFeatureToggleConfig } from './feature-toggle.interface';
import { LgFeatureToggleDirective } from './feature-toggle.directive';
import { LgFeatureToggleService } from './feature-toggle.service';

describe('LgFeatureToggleDirective', () => {
  let directive: LgFeatureToggleDirective;
  let togglesSubject: BehaviorSubject<LgFeatureToggleConfig>;
  let viewContainer: jest.Mocked<ViewContainerRef>;
  let templateRef: TemplateRef<any>;

  beforeEach(() => {
    togglesSubject = new BehaviorSubject<LgFeatureToggleConfig>({});

    const service = {
      toggles$: togglesSubject.asObservable(),
    } as LgFeatureToggleService;

    viewContainer = {
      clear: jest.fn(),
      createEmbeddedView: jest.fn(),
    } as any;

    templateRef = {} as any;

    directive = new LgFeatureToggleDirective(
      service,
      templateRef,
      viewContainer,
      undefined, // no options
    );
  });

  it('should create the directive', () => {
    expect(directive).toBeTruthy();
  });

  it('should handle undefined feature toggle value', () => {
    directive.lgFeatureToggle = 'testFeature';
    directive.ngOnInit();

    // Initial state should show the template (undefined value)
    expect(viewContainer.clear).toHaveBeenCalled();
    expect(viewContainer.createEmbeddedView).toHaveBeenCalledWith(templateRef);
  });

  it('should show content when feature is enabled', () => {
    directive.lgFeatureToggle = 'testFeature';
    directive.ngOnInit();

    // Reset spy counters
    jest.clearAllMocks();

    // Set feature to true
    togglesSubject.next({ testFeature: true });

    expect(viewContainer.clear).toHaveBeenCalled();
    expect(viewContainer.createEmbeddedView).toHaveBeenCalledWith(templateRef);
  });

  it('should hide content when feature is disabled', () => {
    directive.lgFeatureToggle = 'testFeature';
    directive.ngOnInit();

    // Reset spy counters
    jest.clearAllMocks();

    // Set feature to false
    togglesSubject.next({ testFeature: false });

    expect(viewContainer.clear).toHaveBeenCalled();
    expect(viewContainer.createEmbeddedView).not.toHaveBeenCalled();
  });

  it('should set defaultHide option via setOptions', () => {
    directive.lgFeatureToggle = 'testFeature';
    directive.setOptions({ defaultHide: true });
    directive.ngOnInit();

    // With defaultHide, undefined features should be hidden
    expect(viewContainer.clear).toHaveBeenCalled();
    expect(viewContainer.createEmbeddedView).not.toHaveBeenCalled();

    // But true features should still be shown
    jest.clearAllMocks();
    togglesSubject.next({ testFeature: true });

    expect(viewContainer.clear).toHaveBeenCalled();
    expect(viewContainer.createEmbeddedView).toHaveBeenCalledWith(templateRef);
  });

  it('should unsubscribe on destroy', () => {
    directive.lgFeatureToggle = 'testFeature';
    directive.ngOnInit();

    const unsubscribeSpy = jest.spyOn(directive.subscription, 'unsubscribe');

    directive.ngOnDestroy();

    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});

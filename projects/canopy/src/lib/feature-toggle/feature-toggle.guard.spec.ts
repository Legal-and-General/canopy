import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { cold } from 'jasmine-marbles';
import { of } from 'rxjs';
import { deepEqual, instance, mock, reset, verify, when } from 'ts-mockito';

import { FeatureToggleGuard } from './feature-toggle.guard';
import { LgFeatureToggleService } from './feature-toggle.service';

enum GuardTypes {
  CAN_ACTIVATE = 'canActivate',
  CAN_LOAD = 'canLoad',
  CAN_ACTIVATE_CHILD = 'canActivateChild',
}

describe('FeatureToggleGuard', () => {
  let configServiceMock: LgFeatureToggleService;
  let guard: FeatureToggleGuard;
  const routerMock = mock(Router);
  const enabledConfig = { parent: true };
  const disabledConfig = { parent: false };
  const enabledConfig2 = { parent: true, child: true };
  const disabledConfig2 = { parent: false, child: false };
  const routeSnapshot: Partial<ActivatedRouteSnapshot> = {
    data: { featureToggle: 'parent' },
    children: [
      {
        data: { featureToggle: 'child' },
      } as any,
    ],
  };

  const checkGuardConfigs = (
    guardType: GuardTypes,
    config,
    marbleValue: boolean,
    onceVerify: boolean = false,
  ) => {
    /* eslint-disable @typescript-eslint/no-unused-expressions, no-unused-expressions */
    onceVerify
      ? when(configServiceMock.toggles$).thenReturn(config)
      : when(configServiceMock.toggles$).thenReturn(of(config));
    /* eslint-enable */

    switch (guardType) {
      case GuardTypes.CAN_ACTIVATE:

        expect(guard.canActivate(routeSnapshot as ActivatedRouteSnapshot)).toBeObservable(
          cold('(a|)', { a: marbleValue }),
        );

        break;

      case GuardTypes.CAN_ACTIVATE_CHILD:

        expect(
          guard.canActivateChild(routeSnapshot as ActivatedRouteSnapshot),
        ).toBeObservable(cold('(a|)', { a: marbleValue }));

        break;

      case GuardTypes.CAN_LOAD:

        expect(guard.canLoad(routeSnapshot as Route)).toBeObservable(
          cold('(a|)', { a: marbleValue }),
        );

        break;
    }

    return verify(
      routerMock.navigate(deepEqual([ '/' ]), deepEqual({ queryParamsHandling: 'merge' })),
    );
  };

  beforeEach(() => {
    configServiceMock = mock(LgFeatureToggleService);

    TestBed.configureTestingModule({
      providers: [
        FeatureToggleGuard,
        {
          provide: LgFeatureToggleService,
          useFactory: () => instance(configServiceMock),
        },
        { provide: Router, useFactory: () => instance(routerMock) },
      ],
    });

    guard = TestBed.inject(FeatureToggleGuard);
  });

  describe('can activate', () => {
    it('should be true when the parent is enabled', () => {
      checkGuardConfigs(GuardTypes.CAN_ACTIVATE, enabledConfig, true).never();
      reset(routerMock);
    });

    it('should be true when the parent and child is enabled', () => {
      checkGuardConfigs(GuardTypes.CAN_ACTIVATE, enabledConfig2, true).never();
      reset(routerMock);
    });

    it('should be false when the parent is disabled', () => {
      checkGuardConfigs(GuardTypes.CAN_ACTIVATE_CHILD, disabledConfig, false).once();
      reset(routerMock);
    });

    it('should be false when the parent is enabled but not child', () => {
      checkGuardConfigs(GuardTypes.CAN_ACTIVATE, disabledConfig2, false).once();
      reset(routerMock);
    });
  });

  describe('can activate child', () => {
    it('should be true when the parent is enabled', () => {
      checkGuardConfigs(GuardTypes.CAN_ACTIVATE_CHILD, of(enabledConfig), true).never();
      reset(routerMock);
    });

    it('should be true when the parent and child is enabled', () => {
      checkGuardConfigs(GuardTypes.CAN_ACTIVATE_CHILD, of(enabledConfig2), true).never();
      reset(routerMock);
    });

    it('should be false when the parent is disabled', () => {
      checkGuardConfigs(
        GuardTypes.CAN_ACTIVATE_CHILD,
        of(disabledConfig),
        false,
        true,
      ).once();

      reset(routerMock);
    });

    it('should be false when the parent is enabled but not child', () => {
      checkGuardConfigs(
        GuardTypes.CAN_ACTIVATE_CHILD,
        of(disabledConfig2),
        false,
        true,
      ).once();

      reset(routerMock);
    });
  });

  describe('can load', () => {
    it('should be true when the parent is enabled', () => {
      checkGuardConfigs(GuardTypes.CAN_LOAD, of(enabledConfig), true).never();
      reset(routerMock);
    });

    it('should be true when the parent and child is enabled', () => {
      checkGuardConfigs(GuardTypes.CAN_LOAD, of(enabledConfig2), true).never();
      reset(routerMock);
    });

    it('should be false when the parent is disabled', () => {
      checkGuardConfigs(GuardTypes.CAN_LOAD, of(disabledConfig), false, true).once();
      reset(routerMock);
    });

    it('should be false when the parent is enabled but not child', () => {
      checkGuardConfigs(GuardTypes.CAN_LOAD, of(disabledConfig2), false, true).once();
      reset(routerMock);
    });
  });
});

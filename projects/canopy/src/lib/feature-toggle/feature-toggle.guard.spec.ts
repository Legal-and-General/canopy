import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { cold } from 'jasmine-marbles';
import { of } from 'rxjs';
import { deepEqual, instance, mock, reset, verify, when } from 'ts-mockito';

import { FeatureToggleGuard } from './feature-toggle.guard';
import { LgFeatureToggleService } from './feature-toggle.service';

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
        data: { featureToggle: 'child' }
      } as any
    ]
  };

  beforeEach(() => {
    configServiceMock = mock(LgFeatureToggleService);

    TestBed.configureTestingModule({
      providers: [
        FeatureToggleGuard,
        {
          provide: LgFeatureToggleService,
          useFactory: () => instance(configServiceMock)
        },
        { provide: Router, useFactory: () => instance(routerMock) }
      ]
    });
    guard = TestBed.get(FeatureToggleGuard);
  });

  describe('can activate', () => {
    it('should be true when the parent is enabled', () => {
      when(configServiceMock.toggles$).thenReturn(of(enabledConfig));
      expect(
        guard.canActivate(routeSnapshot as ActivatedRouteSnapshot)
      ).toBeObservable(cold('(a|)', { a: true }));
      verify(
        routerMock.navigate(
          deepEqual(['/']),
          deepEqual({ queryParamsHandling: 'merge' })
        )
      ).never();
      reset(routerMock);
    });

    it('should be true when the parent and child is enabled', () => {
      when(configServiceMock.toggles$).thenReturn(of(enabledConfig2));
      expect(
        guard.canActivate(routeSnapshot as ActivatedRouteSnapshot)
      ).toBeObservable(cold('(a|)', { a: true }));
      verify(
        routerMock.navigate(
          deepEqual(['/']),
          deepEqual({ queryParamsHandling: 'merge' })
        )
      ).never();
      reset(routerMock);
    });

    it('should be false when the parent is disabled', () => {
      when(configServiceMock.toggles$).thenReturn(of(disabledConfig));
      expect(
        guard.canActivate(routeSnapshot as ActivatedRouteSnapshot)
      ).toBeObservable(cold('(a|)', { a: false }));
      verify(
        routerMock.navigate(
          deepEqual(['/']),
          deepEqual({ queryParamsHandling: 'merge' })
        )
      ).once();
      reset(routerMock);
    });

    it('should be false when the parent is enabled but not child', () => {
      when(configServiceMock.toggles$).thenReturn(of(disabledConfig2));
      expect(
        guard.canActivate(routeSnapshot as ActivatedRouteSnapshot)
      ).toBeObservable(cold('(a|)', { a: false }));
      verify(
        routerMock.navigate(
          deepEqual(['/']),
          deepEqual({ queryParamsHandling: 'merge' })
        )
      ).once();
      reset(routerMock);
    });
  });

  describe('can activate child', () => {
    it('should be true when the parent is enabled', () => {
      when(configServiceMock.toggles$).thenReturn(of(enabledConfig));
      expect(
        guard.canActivateChild(routeSnapshot as ActivatedRouteSnapshot)
      ).toBeObservable(cold('(a|)', { a: true }));
      verify(
        routerMock.navigate(
          deepEqual(['/']),
          deepEqual({ queryParamsHandling: 'merge' })
        )
      ).never();
      reset(routerMock);
    });

    it('should be true when the parent and child is enabled', () => {
      when(configServiceMock.toggles$).thenReturn(of(enabledConfig2));
      expect(
        guard.canActivateChild(routeSnapshot as ActivatedRouteSnapshot)
      ).toBeObservable(cold('(a|)', { a: true }));
      verify(
        routerMock.navigate(
          deepEqual(['/']),
          deepEqual({ queryParamsHandling: 'merge' })
        )
      ).never();
      reset(routerMock);
    });

    it('should be false when the parent is disabled', () => {
      when(configServiceMock.toggles$).thenReturn(of(disabledConfig));
      expect(
        guard.canActivateChild(routeSnapshot as ActivatedRouteSnapshot)
      ).toBeObservable(cold('(a|)', { a: false }));
      verify(
        routerMock.navigate(
          deepEqual(['/']),
          deepEqual({ queryParamsHandling: 'merge' })
        )
      ).once();
      reset(routerMock);
    });

    it('should be false when the parent is enabled but not child', () => {
      when(configServiceMock.toggles$).thenReturn(of(disabledConfig2));
      expect(
        guard.canActivateChild(routeSnapshot as ActivatedRouteSnapshot)
      ).toBeObservable(cold('(a|)', { a: false }));
      verify(
        routerMock.navigate(
          deepEqual(['/']),
          deepEqual({ queryParamsHandling: 'merge' })
        )
      ).once();
      reset(routerMock);
    });
  });
  describe('can load', () => {
    it('should be true when the parent is enabled', () => {
      when(configServiceMock.toggles$).thenReturn(of(enabledConfig));
      expect(guard.canLoad(routeSnapshot as Route)).toBeObservable(
        cold('(a|)', { a: true })
      );
      verify(
        routerMock.navigate(
          deepEqual(['/']),
          deepEqual({ queryParamsHandling: 'merge' })
        )
      ).never();
      reset(routerMock);
    });

    it('should be true when the parent and child is enabled', () => {
      when(configServiceMock.toggles$).thenReturn(of(enabledConfig2));
      expect(guard.canLoad(routeSnapshot as Route)).toBeObservable(
        cold('(a|)', { a: true })
      );
      verify(
        routerMock.navigate(
          deepEqual(['/']),
          deepEqual({ queryParamsHandling: 'merge' })
        )
      ).never();
      reset(routerMock);
    });

    it('should be false when the parent is disabled', () => {
      when(configServiceMock.toggles$).thenReturn(of(disabledConfig));
      expect(guard.canLoad(routeSnapshot as Route)).toBeObservable(
        cold('(a|)', { a: false })
      );
      verify(
        routerMock.navigate(
          deepEqual(['/']),
          deepEqual({ queryParamsHandling: 'merge' })
        )
      ).once();
      reset(routerMock);
    });

    it('should be false when the parent is enabled but not child', () => {
      when(configServiceMock.toggles$).thenReturn(of(disabledConfig2));
      expect(guard.canLoad(routeSnapshot as Route)).toBeObservable(
        cold('(a|)', { a: false })
      );
      verify(
        routerMock.navigate(
          deepEqual(['/']),
          deepEqual({ queryParamsHandling: 'merge' })
        )
      ).once();
      reset(routerMock);
    });
  });
});

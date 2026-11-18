import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of } from 'rxjs';
import type { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { FeatureToggleGuard } from './feature-toggle.guard';
import { LgFeatureToggleService } from './feature-toggle.service';

function expectGuardResult(result: Observable<boolean>, value: boolean): void {
  const scheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });

  scheduler.run(({ expectObservable }) => {
    expectObservable(result).toBe('(a|)', { a: value });
  });
}

describe('FeatureToggleGuard', () => {
  let configService: Mocked<LgFeatureToggleService>;
  let guard: FeatureToggleGuard;
  let router: Mocked<Router>;
  const enabledConfig = { parent: true };
  const disabledConfig = { parent: false };
  const enabledConfig2 = { parent: true, child: true };
  const disabledConfig2 = { parent: false, child: false };
  const routeSnapshot = {
    data: { featureToggle: 'parent' },
    children: [
      {
        data: { featureToggle: 'child' },
      },
    ],
  } as unknown as ActivatedRouteSnapshot;

  beforeEach(() => {
    const mockRouter = {
      navigate: vi.fn().mockReturnValue(Promise.resolve(true)),
    };

    const mockConfigService = {
      toggles$: of({}),
    };

    TestBed.configureTestingModule({
      providers: [
        FeatureToggleGuard,
        { provide: LgFeatureToggleService, useValue: mockConfigService },
        { provide: Router, useValue: mockRouter },
      ],
    });

    guard = TestBed.inject(FeatureToggleGuard);
    router = TestBed.inject(Router) as Mocked<Router>;

    configService = TestBed.inject(LgFeatureToggleService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('can activate', () => {
    it('should be true when the parent is enabled', () => {
      configService.toggles$ = of(enabledConfig);

      expectGuardResult(guard.canActivate(routeSnapshot), true);

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should be true when the parent and child is enabled', () => {
      configService.toggles$ = of(enabledConfig2);

      expectGuardResult(guard.canActivate(routeSnapshot), true);

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should be false when the parent is disabled', () => {
      configService.toggles$ = of(disabledConfig);

      expectGuardResult(guard.canActivate(routeSnapshot), false);

      // Fix: Correct router.navigate parameters
      expect(router.navigate).toHaveBeenCalledWith([ '/' ], {
        queryParamsHandling: 'merge',
      });

      expect(router.navigate).toHaveBeenCalledTimes(1);
    });

    it('should be false when the parent is enabled but not child', () => {
      configService.toggles$ = of(disabledConfig2);

      expectGuardResult(guard.canActivate(routeSnapshot), false);

      // Fix: Correct router.navigate parameters
      expect(router.navigate).toHaveBeenCalledWith([ '/' ], {
        queryParamsHandling: 'merge',
      });

      expect(router.navigate).toHaveBeenCalledTimes(1);
    });
  });

  describe('can activate child', () => {
    it('should be true when the parent is enabled', () => {
      configService.toggles$ = of(enabledConfig);

      expectGuardResult(guard.canActivateChild(routeSnapshot), true);

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should be true when the parent and child is enabled', () => {
      configService.toggles$ = of(enabledConfig2);

      expectGuardResult(guard.canActivateChild(routeSnapshot), true);

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should be false when the parent is disabled', () => {
      configService.toggles$ = of(disabledConfig);

      expectGuardResult(guard.canActivateChild(routeSnapshot), false);

      // Fix: Correct router.navigate parameters
      expect(router.navigate).toHaveBeenCalledWith([ '/' ], {
        queryParamsHandling: 'merge',
      });

      expect(router.navigate).toHaveBeenCalledTimes(1);
    });

    it('should be false when the parent is enabled but not child', () => {
      configService.toggles$ = of(disabledConfig2);

      expectGuardResult(guard.canActivateChild(routeSnapshot), false);

      // Fix: Correct router.navigate parameters
      expect(router.navigate).toHaveBeenCalledWith([ '/' ], {
        queryParamsHandling: 'merge',
      });

      expect(router.navigate).toHaveBeenCalledTimes(1);
    });
  });

  describe('can load', () => {
    it('should be true when the parent is enabled', () => {
      configService.toggles$ = of(enabledConfig);

      expectGuardResult(guard.canLoad(routeSnapshot), true);

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should be true when the parent and child is enabled', () => {
      configService.toggles$ = of(enabledConfig2);

      expectGuardResult(guard.canLoad(routeSnapshot), true);

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should be false when the parent is disabled', () => {
      configService.toggles$ = of(disabledConfig);

      expectGuardResult(guard.canLoad(routeSnapshot), false);

      // Fix: Correct router.navigate parameters
      expect(router.navigate).toHaveBeenCalledWith([ '/' ], {
        queryParamsHandling: 'merge',
      });

      expect(router.navigate).toHaveBeenCalledTimes(1);
    });

    it('should be false when the parent is enabled but not child', () => {
      configService.toggles$ = of(disabledConfig2);

      expectGuardResult(guard.canLoad(routeSnapshot), false);

      // Fix: Correct router.navigate parameters
      expect(router.navigate).toHaveBeenCalledWith([ '/' ], {
        queryParamsHandling: 'merge',
      });

      expect(router.navigate).toHaveBeenCalledTimes(1);
    });
  });
});

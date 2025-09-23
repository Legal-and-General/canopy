import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { cold } from 'jest-marbles';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { FeatureToggleGuard } from './feature-toggle.guard';
import { LgFeatureToggleService } from './feature-toggle.service';

describe('FeatureToggleGuard', () => {
  let configService: jest.Mocked<LgFeatureToggleService>;
  let guard: FeatureToggleGuard;
  let router: jest.Mocked<Router>;
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
      navigate: jest.fn().mockReturnValue(Promise.resolve(true)),
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
    router = TestBed.inject(Router) as jest.Mocked<Router>;

    configService = TestBed.inject(
      LgFeatureToggleService,
    ) as jest.Mocked<LgFeatureToggleService>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('can activate', () => {
    it('should be true when the parent is enabled', () => {
      configService.toggles$ = of(enabledConfig);

      expect(guard.canActivate(routeSnapshot)).toBeObservable(cold('(a|)', { a: true }));

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should be true when the parent and child is enabled', () => {
      configService.toggles$ = of(enabledConfig2);

      expect(guard.canActivate(routeSnapshot)).toBeObservable(cold('(a|)', { a: true }));

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should be false when the parent is disabled', () => {
      configService.toggles$ = of(disabledConfig);

      // Create a new TestScheduler instance
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      scheduler.run(({ expectObservable }) => {
        const result$ = guard.canActivate(routeSnapshot);

        expectObservable(result$).toBe('(a|)', { a: false });
      });

      // Fix: Correct router.navigate parameters
      expect(router.navigate).toHaveBeenCalledWith([ '/' ], {
        queryParamsHandling: 'merge',
      });

      expect(router.navigate).toHaveBeenCalledTimes(1);
    });

    it('should be false when the parent is enabled but not child', () => {
      configService.toggles$ = of(disabledConfig2);

      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      scheduler.run(({ expectObservable }) => {
        const result$ = guard.canActivate(routeSnapshot);

        expectObservable(result$).toBe('(a|)', { a: false });
      });

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

      expect(guard.canActivateChild(routeSnapshot)).toBeObservable(
        cold('(a|)', { a: true }),
      );

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should be true when the parent and child is enabled', () => {
      configService.toggles$ = of(enabledConfig2);

      expect(guard.canActivateChild(routeSnapshot)).toBeObservable(
        cold('(a|)', { a: true }),
      );

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should be false when the parent is disabled', () => {
      configService.toggles$ = of(disabledConfig);

      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      scheduler.run(({ expectObservable }) => {
        const result$ = guard.canActivateChild(routeSnapshot);

        expectObservable(result$).toBe('(a|)', { a: false });
      });

      // Fix: Correct router.navigate parameters
      expect(router.navigate).toHaveBeenCalledWith([ '/' ], {
        queryParamsHandling: 'merge',
      });

      expect(router.navigate).toHaveBeenCalledTimes(1);
    });

    it('should be false when the parent is enabled but not child', () => {
      configService.toggles$ = of(disabledConfig2);

      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      scheduler.run(({ expectObservable }) => {
        const result$ = guard.canActivateChild(routeSnapshot);

        expectObservable(result$).toBe('(a|)', { a: false });
      });

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

      expect(guard.canLoad(routeSnapshot)).toBeObservable(cold('(a|)', { a: true }));

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should be true when the parent and child is enabled', () => {
      configService.toggles$ = of(enabledConfig2);

      expect(guard.canLoad(routeSnapshot)).toBeObservable(cold('(a|)', { a: true }));

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should be false when the parent is disabled', () => {
      configService.toggles$ = of(disabledConfig);

      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      scheduler.run(({ expectObservable }) => {
        const result$ = guard.canLoad(routeSnapshot);

        expectObservable(result$).toBe('(a|)', { a: false });
      });

      // Fix: Correct router.navigate parameters
      expect(router.navigate).toHaveBeenCalledWith([ '/' ], {
        queryParamsHandling: 'merge',
      });

      expect(router.navigate).toHaveBeenCalledTimes(1);
    });

    it('should be false when the parent is enabled but not child', () => {
      configService.toggles$ = of(disabledConfig2);

      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      scheduler.run(({ expectObservable }) => {
        const result$ = guard.canLoad(routeSnapshot);

        expectObservable(result$).toBe('(a|)', { a: false });
      });

      // Fix: Correct router.navigate parameters
      expect(router.navigate).toHaveBeenCalledWith([ '/' ], {
        queryParamsHandling: 'merge',
      });

      expect(router.navigate).toHaveBeenCalledTimes(1);
    });
  });
});

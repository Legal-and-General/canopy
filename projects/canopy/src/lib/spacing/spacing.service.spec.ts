import { TestBed } from '@angular/core/testing';

import { DynamicStyleService } from '../utils/dynamic-style.service';
import { BreakpointValues } from '../shared/breakpoints.interface';

import { SpacingService } from './spacing.service';

describe('SpacingService', () => {
  let spacingService: SpacingService;
  let dynamicStyleService: DynamicStyleService;

  beforeEach(() => {
    const spy = {
      addRules: jest.fn(),
      addRulesToMediaQuery: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [ SpacingService, { provide: DynamicStyleService, useValue: spy } ],
    });

    spacingService = TestBed.inject(SpacingService);
    dynamicStyleService = TestBed.inject(DynamicStyleService);
  });

  describe('createNewClasses method', () => {
    describe('when given non-responsive spacing varaints', () => {
      it('should return the correct class and add styles for padding ', () => {
        expect(spacingService.createNewClasses('4', 'padding')).toEqual([
          'lg-padding--4',
        ]);

        expect(dynamicStyleService.addRules).toHaveBeenCalledWith([
          { selector: 'lg-padding--4', declaration: 'padding:var(--space-4)!important' },
        ]);
      });

      it('should return the correct class and add styles for margin', () => {
        expect(spacingService.createNewClasses('4', 'margin')).toEqual([ 'lg-margin--4' ]);

        expect(dynamicStyleService.addRules).toHaveBeenCalledWith([
          { selector: 'lg-margin--4', declaration: 'margin:var(--space-4)!important' },
        ]);
      });

      it('should return the correct classes and add styles for margin on specific sides', () => {
        [ 'margin-top', 'margin-right', 'margin-bottom', 'margin-left' ].forEach(side => {
          const className = `lg-${side.replace('-', '__')}--5`;

          expect(spacingService.createNewClasses('5', side)).toEqual([ className ]);

          expect(dynamicStyleService.addRules).toHaveBeenCalledWith([
            {
              selector: `lg-${side.replace('-', '__')}--5`,
              declaration: `${side}:var(--space-5)!important`,
            },
          ]);
        });
      });

      it('should return the correct class and add styles for padding on specific sides', () => {
        [ 'padding-top', 'padding-right', 'padding-bottom', 'padding-left' ].forEach(
          side => {
            const className = `lg-${side.replace('-', '__')}--5`;

            expect(spacingService.createNewClasses('5', side)).toEqual([ className ]);

            expect(dynamicStyleService.addRules).toHaveBeenCalledWith([
              {
                selector: `lg-${side.replace('-', '__')}--5`,
                declaration: `${side}:var(--space-5)!important`,
              },
            ]);
          },
        );
      });
    });

    describe('when given responsive spacing objects', () => {
      describe('when given a single object', () => {
        it('should return the correct class and add styles for padding', () => {
          expect(spacingService.createNewClasses({ sm: '5' }, 'padding')).toEqual([
            'lg-padding--sm--5',
          ]);

          expect(dynamicStyleService.addRulesToMediaQuery).toHaveBeenCalledWith([
            {
              selector: 'lg-padding--sm--5',
              declaration: 'padding:var(--space-5)!important',
              breakpoint: BreakpointValues.sm,
            },
          ]);
        });

        it('should return the correct class and add styles for margin', () => {
          expect(spacingService.createNewClasses({ sm: '5' }, 'margin')).toEqual([
            'lg-margin--sm--5',
          ]);

          expect(dynamicStyleService.addRulesToMediaQuery).toHaveBeenCalledWith([
            {
              selector: 'lg-margin--sm--5',
              declaration: 'margin:var(--space-5)!important',
              breakpoint: BreakpointValues.sm,
            },
          ]);
        });

        it('should return the correct class and add styles on specific sides', () => {
          [
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
          ].forEach(side => {
            const className = `lg-${side.replace('-', '__')}--sm--5`;

            expect(spacingService.createNewClasses({ sm: '5' }, side)).toEqual([
              className,
            ]);

            expect(dynamicStyleService.addRulesToMediaQuery).toHaveBeenCalledWith([
              {
                selector: `lg-${side.replace('-', '__')}--sm--5`,
                declaration: `${side}:var(--space-5)!important`,
                breakpoint: BreakpointValues.sm,
              },
            ]);
          });
        });
      });

      describe('when given multiple objects', () => {
        it('should return all the correct classes and add each style', () => {
          expect(
            spacingService.createNewClasses({ sm: '5', md: '7', lg: '9' }, 'padding'),
          ).toEqual([ 'lg-padding--sm--5', 'lg-padding--md--7', 'lg-padding--lg--9' ]);

          expect(dynamicStyleService.addRulesToMediaQuery).toHaveBeenCalledWith([
            {
              selector: 'lg-padding--sm--5',
              declaration: 'padding:var(--space-5)!important',
              breakpoint: BreakpointValues.sm,
            },
            {
              selector: 'lg-padding--md--7',
              declaration: 'padding:var(--space-7)!important',
              breakpoint: BreakpointValues.md,
            },
            {
              selector: 'lg-padding--lg--9',
              declaration: 'padding:var(--space-9)!important',
              breakpoint: BreakpointValues.lg,
            },
          ]);
        });
      });
    });
  });

  describe('createNoneAtClass method', () => {
    it('should return empty string when breakpoint is null', () => {
      expect(spacingService.createNoneAtClass(null, 'margin')).toEqual('');
    });

    it('should return empty string when breakpoint is undefined', () => {
      expect(spacingService.createNoneAtClass(undefined, 'margin')).toEqual('');
    });

    it('should create correct class for margin with all breakpoints', () => {
      expect(spacingService.createNoneAtClass('sm', 'margin')).toEqual(
        'lg-margin--sm--none',
      );

      expect(spacingService.createNoneAtClass('md', 'margin')).toEqual(
        'lg-margin--md--none',
      );

      expect(spacingService.createNoneAtClass('lg', 'margin')).toEqual(
        'lg-margin--lg--none',
      );

      expect(spacingService.createNoneAtClass('xl', 'margin')).toEqual(
        'lg-margin--xl--none',
      );

      expect(spacingService.createNoneAtClass('xxl', 'margin')).toEqual(
        'lg-margin--xxl--none',
      );
    });

    it('should create correct class for padding with all breakpoints', () => {
      expect(spacingService.createNoneAtClass('sm', 'padding')).toEqual(
        'lg-padding--sm--none',
      );

      expect(spacingService.createNoneAtClass('md', 'padding')).toEqual(
        'lg-padding--md--none',
      );

      expect(spacingService.createNoneAtClass('lg', 'padding')).toEqual(
        'lg-padding--lg--none',
      );

      expect(spacingService.createNoneAtClass('xl', 'padding')).toEqual(
        'lg-padding--xl--none',
      );

      expect(spacingService.createNoneAtClass('xxl', 'padding')).toEqual(
        'lg-padding--xxl--none',
      );
    });

    it('should create correct class for margin-top', () => {
      expect(spacingService.createNoneAtClass('md', 'margin-top')).toEqual(
        'lg-margin__top--md--none',
      );
    });

    it('should create correct class for margin-right', () => {
      expect(spacingService.createNoneAtClass('lg', 'margin-right')).toEqual(
        'lg-margin__right--lg--none',
      );
    });

    it('should create correct class for margin-bottom', () => {
      expect(spacingService.createNoneAtClass('xl', 'margin-bottom')).toEqual(
        'lg-margin__bottom--xl--none',
      );
    });

    it('should create correct class for margin-left', () => {
      expect(spacingService.createNoneAtClass('sm', 'margin-left')).toEqual(
        'lg-margin__left--sm--none',
      );
    });

    it('should create correct class for padding-top', () => {
      expect(spacingService.createNoneAtClass('md', 'padding-top')).toEqual(
        'lg-padding__top--md--none',
      );
    });

    it('should create correct class for padding-right', () => {
      expect(spacingService.createNoneAtClass('lg', 'padding-right')).toEqual(
        'lg-padding__right--lg--none',
      );
    });

    it('should create correct class for padding-bottom', () => {
      expect(spacingService.createNoneAtClass('xl', 'padding-bottom')).toEqual(
        'lg-padding__bottom--xl--none',
      );
    });

    it('should create correct class for padding-left', () => {
      expect(spacingService.createNoneAtClass('sm', 'padding-left')).toEqual(
        'lg-padding__left--sm--none',
      );
    });

    it('should correctly replace hyphens with double underscores for all margin sides', () => {
      [ 'margin-top', 'margin-right', 'margin-bottom', 'margin-left' ].forEach(side => {
        const className = spacingService.createNoneAtClass('md', side);

        expect(className).toContain('__');
        expect(className).not.toContain(`lg-${side}`);
        expect(className).toEqual(`lg-${side.replace('-', '__')}--md--none`);
      });
    });

    it('should correctly replace hyphens with double underscores for all padding sides', () => {
      [ 'padding-top', 'padding-right', 'padding-bottom', 'padding-left' ].forEach(
        side => {
          const className = spacingService.createNoneAtClass('lg', side);

          expect(className).toContain('__');
          expect(className).not.toContain(`lg-${side}`);
          expect(className).toEqual(`lg-${side.replace('-', '__')}--lg--none`);
        },
      );
    });
  });
});

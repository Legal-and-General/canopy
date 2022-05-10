import { TestBed } from '@angular/core/testing';

import { DynamicStyleService } from '../utils/dynamic-style.service';
import { BreakpointValues } from '../shared/breakpoints.interface';

import { SpacingService } from './spacing.service';

describe('SpacingService', () => {
  let spacingService: SpacingService;
  let dynamicStyleService: DynamicStyleService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('DynamicStyleService', [
      'addRules',
      'addRulesToMediaQuery',
    ]);

    TestBed.configureTestingModule({
      providers: [ SpacingService, { provide: DynamicStyleService, useValue: spy } ],
    });

    spacingService = TestBed.inject(SpacingService);
    dynamicStyleService = TestBed.inject(DynamicStyleService);
  });

  describe('createNewClasses method', () => {
    describe('when given non-responsive spacing varaints', () => {
      it('should return the correct class and add styles for padding ', () => {
        expect(spacingService.createNewClasses('sm', 'padding')).toEqual([
          'lg-padding--sm',
        ]);

        expect(dynamicStyleService.addRules).toHaveBeenCalledWith([
          { selector: 'lg-padding--sm', declaration: 'padding:1rem!important' },
        ]);
      });

      it('should return the correct class and add styles for margin', () => {
        expect(spacingService.createNewClasses('sm', 'margin')).toEqual([
          'lg-margin--sm',
        ]);

        expect(dynamicStyleService.addRules).toHaveBeenCalledWith([
          { selector: 'lg-margin--sm', declaration: 'margin:1rem!important' },
        ]);
      });

      it('should return the correct classes and add styles for margin on specific sides', () => {
        [ 'margin-top', 'margin-right', 'margin-bottom', 'margin-left' ].forEach(side => {
          const className = `lg-${side.replace('-', '__')}--md`;

          expect(spacingService.createNewClasses('md', side)).toEqual([ className ]);

          expect(dynamicStyleService.addRules).toHaveBeenCalledWith([
            {
              selector: `lg-${side.replace('-', '__')}--md`,
              declaration: `${side}:1.5rem!important`,
            },
          ]);
        });
      });

      it('should return the correct class and add styles for padding on specific sides', () => {
        [ 'padding-top', 'padding-right', 'padding-bottom', 'padding-left' ].forEach(
          side => {
            const className = `lg-${side.replace('-', '__')}--md`;

            expect(spacingService.createNewClasses('md', side)).toEqual([ className ]);

            expect(dynamicStyleService.addRules).toHaveBeenCalledWith([
              {
                selector: `lg-${side.replace('-', '__')}--md`,
                declaration: `${side}:1.5rem!important`,
              },
            ]);
          },
        );
      });
    });

    describe('when given responsive spacing objects', () => {
      describe('when given a single object', () => {
        it('should return the correct class and add styles for padding', () => {
          expect(spacingService.createNewClasses({ sm: 'md' }, 'padding')).toEqual([
            'lg-padding--sm--md',
          ]);

          expect(dynamicStyleService.addRulesToMediaQuery).toHaveBeenCalledWith([
            {
              selector: 'lg-padding--sm--md',
              declaration: 'padding:1.5rem!important',
              breakpoint: BreakpointValues.sm,
            },
          ]);
        });

        it('should return the correct class and add styles for margin', () => {
          expect(spacingService.createNewClasses({ sm: 'md' }, 'margin')).toEqual([
            'lg-margin--sm--md',
          ]);

          expect(dynamicStyleService.addRulesToMediaQuery).toHaveBeenCalledWith([
            {
              selector: 'lg-margin--sm--md',
              declaration: 'margin:1.5rem!important',
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
            const className = `lg-${side.replace('-', '__')}--sm--md`;

            expect(spacingService.createNewClasses({ sm: 'md' }, side)).toEqual([
              className,
            ]);

            expect(dynamicStyleService.addRulesToMediaQuery).toHaveBeenCalledWith([
              {
                selector: `lg-${side.replace('-', '__')}--sm--md`,
                declaration: `${side}:1.5rem!important`,
                breakpoint: BreakpointValues.sm,
              },
            ]);
          });
        });
      });

      describe('when given multiple objects', () => {
        it('should return all the correct classes and add each style', () => {
          expect(
            spacingService.createNewClasses(
              { sm: 'md', md: 'xl', lg: 'xxxl' },
              'padding',
            ),
          ).toEqual([ 'lg-padding--sm--md', 'lg-padding--md--xl', 'lg-padding--lg--xxxl' ]);

          expect(dynamicStyleService.addRulesToMediaQuery).toHaveBeenCalledWith([
            {
              selector: 'lg-padding--sm--md',
              declaration: 'padding:1.5rem!important',
              breakpoint: BreakpointValues.sm,
            },
            {
              selector: 'lg-padding--md--xl',
              declaration: 'padding:2.5rem!important',
              breakpoint: BreakpointValues.md,
            },
            {
              selector: 'lg-padding--lg--xxxl',
              declaration: 'padding:4.5rem!important',
              breakpoint: BreakpointValues.lg,
            },
          ]);
        });
      });
    });
  });
});

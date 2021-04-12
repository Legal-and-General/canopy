import { BreakpointValues } from '../shared/breakpoints.interface';
import { DynamicStyleService } from './dynamic-style.service';

describe('DynamicStyleService', () => {
  let service: DynamicStyleService;

  beforeEach(() => {
    service = new DynamicStyleService();
    service.styleTag = {};
    service.styleTag.innerHTML = '';
  });

  describe('addRules function', () => {
    describe('basic logic', () => {
      it('should add the rules to the style tag in the correct format', () => {
        service.addRules([{ selector: 'lg-padding', declaration: 'padding:1rem' }]);
        expect(service.styleTag.innerHTML).toBe('.lg-padding{padding:1rem}');
      });
      it('should add multiple rules if provided', () => {
        service.addRules([
          { selector: 'lg-padding', declaration: 'padding:1rem' },
          { selector: 'lg-margin', declaration: 'margin:none' },
        ]);
        expect(service.styleTag.innerHTML).toBe(
          '.lg-padding{padding:1rem}.lg-margin{margin:none}',
        );
      });
    });

    describe('multiple calls in same browser session', () => {
      it('should not add a rule again if the selector already exists', () => {
        service.addRules([{ selector: 'lg-padding', declaration: 'padding:1rem' }]);
        service.addRules([{ selector: 'lg-padding', declaration: 'padding:none' }]);
        expect(service.styleTag.innerHTML).toBe('.lg-padding{padding:1rem}');
      });
      it('should add the rules correctly when the function is called multiple times', () => {
        service.addRules([{ selector: 'lg-padding', declaration: 'padding:1rem' }]);
        service.addRules([{ selector: 'lg-margin', declaration: 'margin:1rem' }]);
        service.addRules([
          { selector: 'lg-padding-left', declaration: 'padding-left: 1rem' },
        ]);
        expect(service.styleTag.innerHTML).toBe(
          '.lg-padding{padding:1rem}.lg-margin{margin:1rem}.lg-padding-left{padding-left: 1rem}',
        );
      });
      it('should only add rules if the selectors do not already exist', () => {
        service.addRules([
          { selector: 'lg-padding', declaration: 'padding:1rem' },
          { selector: 'lg-margin', declaration: 'margin:1rem' },
          { selector: 'lg-padding-left', declaration: 'padding-left: 1rem' },
        ]);

        // new rule
        service.addRules([
          { selector: 'lg-padding-bottom', declaration: 'padding-bottom: 1rem' },
        ]);

        // existing rule
        service.addRules([{ selector: 'lg-padding', declaration: 'padding:1rem' }]);

        // new rule
        service.addRules([
          { selector: 'lg-padding-top', declaration: 'padding-top: 1rem' },
        ]);

        // existing rules
        service.addRules([
          { selector: 'lg-padding-left', declaration: 'padding-left: 1rem' },
          { selector: 'lg-margin', declaration: 'margin:1rem' },
        ]);

        expect(service.styleTag.innerHTML).toBe(
          '.lg-padding{padding:1rem}.lg-margin{margin:1rem}.lg-padding-left{padding-left: 1rem}.lg-padding-bottom{padding-bottom: 1rem}.lg-padding-top{padding-top: 1rem}',
        );
      });
    });
  });

  describe('addRulesToMediaQuery function', () => {
    describe('basic logic', () => {
      beforeEach(() => {
        service.styleTag.innerHTML = '';
      });

      it(`should add a rule to all available breakpoints`, () => {
        Object.keys(BreakpointValues).forEach((key) => {
          service.styleTag.innerHTML = '';
          service.addRulesToMediaQuery([
            {
              selector: 'lg-padding',
              declaration: 'padding:1rem',
              breakpoint: BreakpointValues[key],
            },
          ]);
          expect(service.styleTag.innerHTML).toBe(
            `@media(min-width:${BreakpointValues[key]}){.lg-padding{padding:1rem}}`,
          );
        });
      });

      it('should add multiple rules to multiple media queries if provided', () => {
        service.addRulesToMediaQuery([
          {
            selector: 'lg-padding',
            declaration: 'padding:1rem',
            breakpoint: BreakpointValues.sm,
          },
          {
            selector: 'lg-padding',
            declaration: 'padding:2rem',
            breakpoint: BreakpointValues.md,
          },
          {
            selector: 'lg-padding',
            declaration: 'padding:3rem',
            breakpoint: BreakpointValues.lg,
          },
        ]);
        expect(service.styleTag.innerHTML).toBe(
          '@media(min-width:20rem){.lg-padding{padding:1rem}}@media(min-width:48rem){.lg-padding{padding:2rem}}@media(min-width:64rem){.lg-padding{padding:3rem}}',
        );
      });

      it('should add a new rule to an existing media query', () => {
        service.addRulesToMediaQuery([
          {
            selector: 'lg-padding',
            declaration: 'padding:1rem',
            breakpoint: BreakpointValues.md,
          },
          {
            selector: 'lg-margin',
            declaration: 'margin:1rem',
            breakpoint: BreakpointValues.md,
          },
        ]);
        expect(service.styleTag.innerHTML).toBe(
          '@media(min-width:48rem){.lg-padding{padding:1rem}.lg-margin{margin:1rem}}',
        );
      });
    });

    describe('adding at the end', () => {
      it('should add each rule before the closing `}` bracket as default', () => {
        service.addRulesToMediaQuery([
          {
            selector: 'test1',
            declaration: 'top:0',
            breakpoint: BreakpointValues.md,
          },
          {
            selector: 'test2',
            declaration: 'top:0',
            breakpoint: BreakpointValues.md,
          },
          {
            selector: 'test3',
            declaration: 'top:0',
            breakpoint: BreakpointValues.md,
          },
        ]);
        expect(service.styleTag.innerHTML).toBe(
          '@media(min-width:48rem){.test1{top:0}.test2{top:0}.test3{top:0}}',
        );
      });
    });

    describe('adding at the start', () => {
      beforeEach(() => {
        service.styleTag.innerHTML = '';
      });

      it('should the rule after the opening `{` if specified - two items', () => {
        // Two items...
        service.addRulesToMediaQuery([
          {
            selector: 'lg-padding',
            declaration: 'padding:1rem',
            breakpoint: BreakpointValues.md,
          },
          {
            selector: 'lg-margin',
            declaration: 'margin:1rem',
            breakpoint: BreakpointValues.md,
            addAtStart: true,
          },
        ]);
        expect(service.styleTag.innerHTML).toBe(
          '@media(min-width:48rem){.lg-margin{margin:1rem}.lg-padding{padding:1rem}}',
        );
      });

      it('should the rule after the opening `{` if specified - three items', () => {
        service.addRulesToMediaQuery([
          {
            selector: 'test1',
            declaration: 'top:0',
            breakpoint: BreakpointValues.md,
          },
          {
            selector: 'test2',
            declaration: 'top:0',
            breakpoint: BreakpointValues.md,
            addAtStart: true,
          },
          {
            selector: 'test3',
            declaration: 'top:0',
            breakpoint: BreakpointValues.md,
          },
        ]);
        expect(service.styleTag.innerHTML).toBe(
          '@media(min-width:48rem){.test2{top:0}.test1{top:0}.test3{top:0}}',
        );
      });

      it('should the rule after the opening `{` if specified - multiple breakpoints', () => {
        service.addRulesToMediaQuery([
          {
            selector: 'test1',
            declaration: 'top:0',
            breakpoint: BreakpointValues.md,
          },
          {
            selector: 'test2',
            declaration: 'top:0',
            breakpoint: BreakpointValues.md,
            addAtStart: true,
          },
          {
            selector: 'test1',
            declaration: 'top:0',
            breakpoint: BreakpointValues.lg,
          },
          {
            selector: 'test2',
            declaration: 'top:0',
            breakpoint: BreakpointValues.lg,
            addAtStart: true,
          },
        ]);
        expect(service.styleTag.innerHTML).toBe(
          '@media(min-width:48rem){.test2{top:0}.test1{top:0}}@media(min-width:64rem){.test2{top:0}.test1{top:0}}',
        );
      });

      it('should the rule after the opening `{` if specified - stress test on many rules', () => {
        const createObj = (selector) => ({
          selector: selector,
          declaration: 'top:0',
          breakpoint: BreakpointValues.md,
        });
        service.addRulesToMediaQuery([
          createObj('test1'),
          createObj('test2'),
          createObj('test3'),
          createObj('test4'),
          createObj('test5'),
          createObj('test6'),
          createObj('test7'),
          createObj('test8'),
          createObj('test9'),
          { ...createObj('start'), addAtStart: true },
        ]);
        expect(service.styleTag.innerHTML).toBe(
          '@media(min-width:48rem){.start{top:0}.test1{top:0}.test2{top:0}.test3{top:0}.test4{top:0}.test5{top:0}.test6{top:0}.test7{top:0}.test8{top:0}.test9{top:0}}',
        );
      });
    });

    describe('multiple calls in same browser session', () => {
      it('should not add a rule to a media query if it already exists', () => {
        service.addRulesToMediaQuery([
          {
            selector: 'lg-padding',
            declaration: 'padding:1rem',
            breakpoint: BreakpointValues.md,
          },
        ]);
        service.addRulesToMediaQuery([
          {
            selector: 'lg-padding',
            declaration: 'padding:1rem',
            breakpoint: BreakpointValues.md,
          },
        ]);
        expect(service.styleTag.innerHTML).toBe(
          '@media(min-width:48rem){.lg-padding{padding:1rem}}',
        );
      });
      it('should only add a new media query if it does not exist', () => {
        service.addRulesToMediaQuery([
          {
            selector: 'lg-padding',
            declaration: 'padding:1rem',
            breakpoint: BreakpointValues.sm,
          },
        ]);
        service.addRulesToMediaQuery([
          {
            selector: 'lg-padding',
            declaration: 'padding:1rem',
            breakpoint: BreakpointValues.md,
          },
        ]);
        service.addRulesToMediaQuery([
          {
            selector: 'lg-margin',
            declaration: 'margin:1rem',
            breakpoint: BreakpointValues.md,
          },
        ]);
        expect(service.styleTag.innerHTML).toBe(
          '@media(min-width:20rem){.lg-padding{padding:1rem}}@media(min-width:48rem){.lg-padding{padding:1rem}.lg-margin{margin:1rem}}',
        );
      });
    });
  });

  describe('addRules and addRulesToMediaQuery functions used together', () => {
    beforeEach(() => {
      service.styleTag.innerHTML = '';
    });

    it('should add the rules and media quieries correctly - test one', () => {
      service.addRules([{ selector: 'lg-padding', declaration: 'padding:1rem' }]);
      service.addRulesToMediaQuery([
        {
          selector: 'lg-padding',
          declaration: 'padding:2rem',
          breakpoint: BreakpointValues.md,
        },
      ]);
      expect(service.styleTag.innerHTML).toBe(
        '.lg-padding{padding:1rem}@media(min-width:48rem){.lg-padding{padding:2rem}}',
      );
    });

    it('should add the rules and media quieries correctly - test two', () => {
      service.addRules([
        { selector: 'lg-padding', declaration: 'padding:1rem' },
        { selector: 'lg-margin', declaration: 'margin:1rem' },
      ]);
      service.addRulesToMediaQuery([
        {
          selector: 'lg-padding',
          declaration: 'padding:1rem',
          breakpoint: BreakpointValues.sm,
        },
        {
          selector: 'lg-padding',
          declaration: 'padding:2rem',
          breakpoint: BreakpointValues.md,
        },
        {
          selector: 'lg-padding',
          declaration: 'padding:3rem',
          breakpoint: BreakpointValues.lg,
        },
      ]);
      expect(service.styleTag.innerHTML).toBe(
        '.lg-padding{padding:1rem}.lg-margin{margin:1rem}@media(min-width:20rem){.lg-padding{padding:1rem}}@media(min-width:48rem){.lg-padding{padding:2rem}}@media(min-width:64rem){.lg-padding{padding:3rem}}',
      );
    });
  });

  describe('insertIntoMediaQuery function', () => {
    describe('inserting at the start after the opening `{` bracket', () => {
      it('should return the correct string - simple example', () => {
        const cssString = `@media(min-width:${BreakpointValues.md}){.test1{top:0}}`;
        expect(
          service.insertRuleInsideMediaQuery(
            cssString,
            BreakpointValues.md,
            '.test2{top:0}',
            true,
          ),
        ).toBe('@media(min-width:48rem){.test2{top:0}.test1{top:0}}');
      });
      it('should add the rule after the opening `{` bracket - complex example', () => {
        const cssString = `@media(min-width:20rem){.test1{top:0}}@media(min-width:${BreakpointValues.md}){.test1{top:0}.test2{top:0}}@media(min-width:64rem){.test1{top:0}}`;
        expect(
          service.insertRuleInsideMediaQuery(
            cssString,
            BreakpointValues.md,
            '.test3{top:0}',
            true,
          ),
        ).toBe(
          '@media(min-width:20rem){.test1{top:0}}@media(min-width:48rem){.test3{top:0}.test1{top:0}.test2{top:0}}@media(min-width:64rem){.test1{top:0}}',
        );
      });
      it('should add the rule before the closing `}` bracket - stress test', () => {
        const cssString = `@media(min-width:${BreakpointValues.md}){.test1{top:0}.test3{top:0}.test3{top:0}.test4{top:0}.test5{top:0}.test6{top:0}.test7{top:0}.test8{top:0}.test9{top:0}}`;
        expect(
          service.insertRuleInsideMediaQuery(
            cssString,
            BreakpointValues.md,
            '.test10{top:0}',
            true,
          ),
        ).toBe(
          `@media(min-width:48rem){.test10{top:0}.test1{top:0}.test3{top:0}.test3{top:0}.test4{top:0}.test5{top:0}.test6{top:0}.test7{top:0}.test8{top:0}.test9{top:0}}`,
        );
      });
    });

    describe('inserting at the end before the closing `}` bracket', () => {
      it('should return the correct string - simple example', () => {
        const cssString = `@media(min-width:${BreakpointValues.md}){.test1{top:0}}`;
        expect(
          service.insertRuleInsideMediaQuery(
            cssString,
            BreakpointValues.md,
            '.test2{top:0}',
          ),
        ).toBe('@media(min-width:48rem){.test1{top:0}.test2{top:0}}');
      });
      it('should return the correct string - complex example', () => {
        const cssString = `@media(min-width:20rem){.test1{top:0}}@media(min-width:${BreakpointValues.md}){.test1{top:0}.test2{top:0}}@media(min-width:64rem){.test1{top:0}}`;
        expect(
          service.insertRuleInsideMediaQuery(
            cssString,
            BreakpointValues.md,
            '.test3{top:0}',
          ),
        ).toBe(
          '@media(min-width:20rem){.test1{top:0}}@media(min-width:48rem){.test1{top:0}.test2{top:0}.test3{top:0}}@media(min-width:64rem){.test1{top:0}}',
        );
      });
      it('should return the correct string - stress test', () => {
        const cssString = `@media(min-width:${BreakpointValues.md}){.test1{top:0}.test3{top:0}.test3{top:0}.test4{top:0}.test5{top:0}.test6{top:0}.test7{top:0}.test8{top:0}.test9{top:0}}`;
        expect(
          service.insertRuleInsideMediaQuery(
            cssString,
            BreakpointValues.md,
            '.test10{top:0}',
          ),
        ).toBe(
          `@media(min-width:48rem){.test1{top:0}.test3{top:0}.test3{top:0}.test4{top:0}.test5{top:0}.test6{top:0}.test7{top:0}.test8{top:0}.test9{top:0}.test10{top:0}}`,
        );
      });
    });
  });
});

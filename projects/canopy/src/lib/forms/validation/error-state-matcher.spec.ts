import { FormGroupDirective, NgControl } from '@angular/forms';

import { LgErrorStateMatcher } from './error-state-matcher';

describe('LgErrorStateMatcher', () => {
  let service: LgErrorStateMatcher;

  beforeEach(() => {
    service = new LgErrorStateMatcher();
  });

  describe('isControlInvalid', () => {
    describe('invalid states', () => {
      it('control is invalid, touched and dirty', () => {
        const control = {
          invalid: true,
          touched: true,
          dirty: true,
        } as NgControl;

        expect(service.isControlInvalid(control)).toBe(true);
      });

      it('control is invalid and untouched and form is submitted', () => {
        const control = {
          invalid: true,
          touched: false,
          dirty: false,
        } as NgControl;

        const controlContainer = {
          submitted: true,
        } as FormGroupDirective;

        expect(service.isControlInvalid(control, controlContainer)).toBe(true);
      });
    });

    describe('pending states', () => {
      it('control is invalid and not touched', () => {
        const control = {
          invalid: true,
          touched: false,
          dirty: false,
        } as NgControl;

        expect(service.isControlInvalid(control)).toBe(false);
      });

      it('control is not invalid and not touched', () => {
        const control = {
          invalid: false,
          touched: false,
          dirty: false,
        } as NgControl;

        expect(service.isControlInvalid(control)).toBe(false);
      });

      it('control is valid and touched', () => {
        const control = {
          invalid: false,
          touched: true,
          dirty: true,
        } as NgControl;

        expect(service.isControlInvalid(control)).toBe(false);
      });

      it('control is valid and untouched and form is submitted', () => {
        const control = {
          invalid: false,
          touched: false,
          dirty: false,
        } as NgControl;

        const controlContainer = {
          submitted: true,
        } as FormGroupDirective;

        expect(service.isControlInvalid(control, controlContainer)).toBe(false);
      });
    });
  });
});

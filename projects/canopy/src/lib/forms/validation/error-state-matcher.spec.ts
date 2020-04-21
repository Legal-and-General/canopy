import { FormGroupDirective, NgControl } from '@angular/forms';

import { instance, mock, when } from 'ts-mockito';

import { LgErrorStateMatcher } from './error-state-matcher';

describe('LgErrorStateMatcher', () => {
  let service: LgErrorStateMatcher;
  let control: NgControl;
  let controlContainer: FormGroupDirective;

  beforeEach(() => {
    service = new LgErrorStateMatcher();
    control = mock(NgControl);
    controlContainer = mock(FormGroupDirective);
  });

  describe('isControlInvalid', () => {
    describe('invalid states', () => {
      it('control is invalid, touched and dirty', () => {
        when(control.invalid).thenReturn(true);
        when(control.touched).thenReturn(true);
        when(control.dirty).thenReturn(true);
        expect(service.isControlInvalid(instance(control))).toBe(true);
      });

      it('control is invalid and untouched and form is submitted', () => {
        when(control.invalid).thenReturn(true);
        when(control.touched).thenReturn(false);
        when(controlContainer.submitted).thenReturn(true);
        expect(
          service.isControlInvalid(
            instance(control),
            instance(controlContainer)
          )
        ).toBe(true);
      });
    });

    describe('pending states', () => {
      it('control is invalid and not touched', () => {
        when(control.invalid).thenReturn(true);
        when(control.touched).thenReturn(false);
        when(control.dirty).thenReturn(false);
        expect(service.isControlInvalid(instance(control))).toBe(false);
      });

      it('control is not invalid and not touched', () => {
        when(control.invalid).thenReturn(false);
        when(control.touched).thenReturn(false);
        when(control.dirty).thenReturn(false);
        expect(service.isControlInvalid(instance(control))).toBe(false);
      });

      it('control is valid and touched', () => {
        when(control.invalid).thenReturn(false);
        when(control.touched).thenReturn(true);
        when(control.dirty).thenReturn(true);
        expect(service.isControlInvalid(instance(control))).toBe(false);
      });

      it('control is valid and untouched and form is submitted', () => {
        when(control.invalid).thenReturn(false);
        when(control.touched).thenReturn(false);
        when(control.dirty).thenReturn(false);
        when(controlContainer.submitted).thenReturn(true);
        expect(
          service.isControlInvalid(
            instance(control),
            instance(controlContainer)
          )
        ).toBe(false);
      });
    });
  });
});

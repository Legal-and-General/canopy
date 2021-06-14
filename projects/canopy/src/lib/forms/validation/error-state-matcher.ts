import { Injectable } from '@angular/core';
import { AbstractControl, FormGroupDirective, NgControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LgErrorStateMatcher {
  /**
   * This function is used to determine whether a specific form field is in an
   * error state.
   *
   * @param control -
   * The input control to check
   * @param controlContainer -
   * The form group that the input is part of
   * @return The error state of the property
   *
   * @example
   *     isControlInvalid(nameInput, registrationForm);
   *     // returns true
   */
  isControlInvalid(
    control: AbstractControl | NgControl,
    controlContainer?: FormGroupDirective,
  ): boolean {
    return !!(
      (control && control.invalid && control.touched && control.dirty) ||
      (controlContainer && controlContainer.submitted && control.invalid)
    );
  }
}

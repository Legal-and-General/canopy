import { Injectable } from '@angular/core';
import { FormGroupDirective, NgControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LgErrorStateMatcher {
  isControlInvalid(
    control: NgControl,
    controlContainer?: FormGroupDirective
  ): boolean {
    return !!(
      (control && control.invalid && control.touched) ||
      (controlContainer && controlContainer.submitted && !control.valid)
    );
  }
}

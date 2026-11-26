import { FieldState } from '@angular/forms/signals';

export function isSignalFieldInvalid(
  state: Pick<FieldState<unknown>, 'invalid' | 'touched' | 'dirty'>,
  submitted: boolean,
): boolean {
  return state.invalid() && ((state.dirty() && state.touched()) || submitted);
}

import { LgSignalCheckboxOptionComponent } from './signal-checkbox-option';
import { LgSignalCheckboxGroupComponent } from './signal-checkbox-group';

describe('Signal checkbox imports', () => {
  it('initialises when the option is imported before its group', () => {
    expect(LgSignalCheckboxOptionComponent).toBeDefined();
    expect(LgSignalCheckboxGroupComponent).toBeDefined();
  });
});

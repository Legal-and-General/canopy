import { LgSignalRadioButtonComponent } from './signal-radio-button';
import { LgSignalRadioGroupComponent } from './signal-radio-group';

describe('Signal radio imports', () => {
  it('initialises when the option is imported before its group', () => {
    expect(LgSignalRadioButtonComponent).toBeDefined();
    expect(LgSignalRadioGroupComponent).toBeDefined();
  });
});

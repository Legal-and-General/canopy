import { moduleMetadata } from '@storybook/angular';

import {
  SignalControlExampleComponent,
  renderSignalControlExample,
  signalControlDefaults,
} from '../../../validation/docs/signal-control-example';

export default {
  title: 'Components/Forms/Checkbox/Signal Forms',
  decorators: [ moduleMetadata({ imports: [ SignalControlExampleComponent ] }) ],
};

export const Checkbox = {
  name: 'Checkbox',
  args: { ...signalControlDefaults, label: 'I will bring my Umbrella if it is raining' },
  argTypes: { size: { control: 'select', options: [ 'sm', 'lg' ] } },
  parameters: { controls: { include: [ 'label', 'size', 'disabled', 'focus' ] } },
  render: (args: object) => renderSignalControlExample('checkbox', args),
};

export const CheckboxGroup = {
  name: 'Checkbox group',
  args: { ...signalControlDefaults, hint: 'Please select all colours that apply' },
  argTypes: { size: { control: 'select', options: [ 'sm', 'lg' ] } },
  parameters: {
    controls: {
      include: [ 'label', 'hint', 'optional', 'inline', 'size', 'disabled', 'focus' ],
    },
  },
  render: (args: object) => renderSignalControlExample('checkbox-group', args),
};

import { moduleMetadata } from '@storybook/angular';

import {
  SignalControlExampleComponent,
  renderSignalControlExample,
  signalControlDefaults,
} from '../../validation/docs/signal-control-example';

export default {
  title: 'Components/Forms/Select/Signal Forms',
  decorators: [ moduleMetadata({ imports: [ SignalControlExampleComponent ] }) ],
};

export const Select = {
  name: 'Select',
  args: { ...signalControlDefaults, hint: 'Please select a colour' },
  parameters: {
    controls: { include: [ 'label', 'hint', 'optional', 'block', 'options', 'disabled' ] },
  },
  render: (args: object) => renderSignalControlExample('select', args),
};

import { moduleMetadata } from '@storybook/angular';

import {
  SignalControlExampleComponent,
  renderSignalControlExample,
  signalControlDefaults,
} from '../../../validation/docs/signal-control-example';

export default {
  title: 'Components/Forms/Radio/Signal Forms',
  decorators: [ moduleMetadata({ imports: [ SignalControlExampleComponent ] }) ],
};

export const Radio = {
  name: 'Radio',
  args: { ...signalControlDefaults, hint: 'Please select a colour' },
  argTypes: { size: { control: 'select', options: [ 'sm', 'lg' ] } },
  parameters: {
    controls: {
      include: [ 'label', 'hint', 'optional', 'inline', 'size', 'disabled', 'focus' ],
    },
  },
  render: (args: object) => renderSignalControlExample('radio', args),
};

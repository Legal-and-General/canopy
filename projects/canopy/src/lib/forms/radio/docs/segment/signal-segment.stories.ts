import { moduleMetadata } from '@storybook/angular';

import {
  SignalControlExampleComponent,
  renderSignalControlExample,
  signalControlDefaults,
} from '../../../validation/docs/signal-control-example';

export default {
  title: 'Components/Forms/Segment/Signal Forms',
  decorators: [ moduleMetadata({ imports: [ SignalControlExampleComponent ] }) ],
};

export const Segment = {
  name: 'Segment',
  args: { ...signalControlDefaults, hint: 'Please select a colour' },
  argTypes: { stack: { control: 'select', options: [ undefined, 'md', 'lg' ] } },
  parameters: {
    controls: { include: [ 'label', 'hint', 'optional', 'stack', 'disabled', 'focus' ] },
  },
  render: (args: object) => renderSignalControlExample('segment', args),
};

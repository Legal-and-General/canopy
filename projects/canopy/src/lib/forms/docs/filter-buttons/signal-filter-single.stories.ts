import { moduleMetadata } from '@storybook/angular';

import {
  SignalControlExampleComponent,
  renderSignalControlExample,
  signalControlDefaults,
} from '../../validation/docs/signal-control-example';

export default {
  title: 'Components/Filter buttons/Signal Forms',
  decorators: [ moduleMetadata({ imports: [ SignalControlExampleComponent ] }) ],
};

export const FilterButtons = {
  name: 'Select one',
  args: { ...signalControlDefaults, label: 'Select a colour' },
  parameters: { controls: { include: [ 'label', 'disabled', 'focus' ] } },
  render: (args: object) => renderSignalControlExample('filter-single', args),
};

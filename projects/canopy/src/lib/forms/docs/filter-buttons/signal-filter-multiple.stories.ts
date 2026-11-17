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

export const FilterMultipleButtons = {
  name: 'Select multiple',
  args: {
    ...signalControlDefaults,
    label: 'Select colours',
    hint: 'Please select all colours that apply',
  },
  parameters: { controls: { include: [ 'label', 'hint', 'disabled', 'focus' ] } },
  render: (args: object) => renderSignalControlExample('filter-multiple', args),
};

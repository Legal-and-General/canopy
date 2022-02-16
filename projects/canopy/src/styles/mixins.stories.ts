import { Meta, Story } from '@storybook/angular';

import { notes } from './mixins.notes';

export default {
  title: 'Style/Mixins',
  parameters: {
    docs: {
      description: {
        component: notes,
      },
      source: {
        hide: true,
      },
    },
  },
} as Meta;

const mixinsTemplate: Story = () => ({
  template: ``,
});

export const mixins = mixinsTemplate.bind({});
mixins.storyName = 'Mixins';
mixins.parameters = {
  viewMode: 'docs',
  docsOnly: true,
};

import { Meta, Story } from '@storybook/angular';

import { notes } from './spacing.notes';

export default {
  title: 'Style/Spacing',
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
} as Meta;

const spacingTemplate: Story = () => ({
  template: ``,
});

export const spacing = spacingTemplate.bind({});
spacing.storyName = 'Spacing';
spacing.parameters = {
  docsOnly: true,
  previewTabs: {
    canvas: {
      hidden: true,
    },
  },
};

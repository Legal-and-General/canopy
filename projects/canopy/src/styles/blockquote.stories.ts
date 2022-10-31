import { Meta, Story } from '@storybook/angular';

const template = `
<blockquote>
  {{ content }}
  <cite *ngIf="author">{{ author }}</cite>
</blockquote>
`;

export default {
  title: 'Components/Block quote/Examples',
  parameters: {
    viewMode: 'story',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
} as Meta;

const quoteTemplate: Story = (args) => ({
  props: args,
  template,
});

export const quote = quoteTemplate.bind({});
quote.storyName = 'Block quote';

quote.args = {
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  author: 'Cicero',
};

quote.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};

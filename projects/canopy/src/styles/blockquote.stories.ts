import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgIf } from '@angular/common';

const template = `
<blockquote>
  {{ content }}
  <cite *ngIf="author">{{ author }}</cite>
</blockquote>
`;

export default {
  title: 'Components/Blockquote/Examples',
  decorators: [
    moduleMetadata({
      imports: [ NgIf ],
    }),
  ],
} as Meta;

const quoteTemplate: Story = args => ({
  props: args,
  template,
});

export const quote = quoteTemplate.bind({});
quote.storyName = 'Blockquote';

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

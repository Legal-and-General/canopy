import { Meta, moduleMetadata } from '@storybook/angular';
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

export const quote = {
  name: 'Blockquote',
  render: (args: unknown) => ({
    props: args,
    template,
  }),
  args: {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Cicero',
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};

import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { LgSeparatorComponent } from '../separator.component';

export default {
  title: 'Components/Separator/Examples',
  component: LgSeparatorComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    variant: {
      options: [ 'solid', 'dotted' ],
      description: 'The variant of separator.',
      table: {
        type: {
          summary: [ 'solid', 'dotted' ],
        },
        defaultValue: {
          summary: 'solid',
        },
      },
      control: {
        type: 'select',
      },
    },
    hasRole: {
      description: 'If true, adds a role of ``separator`` to the component.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    hostElement: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
  <lg-separator [variant]="variant" [hasRole]="hasRole"></lg-separator>
`;

const detailsTemplate: StoryFn<LgSeparatorComponent> = (args: LgSeparatorComponent) => ({
  props: args,
  template,
});

export const standardSeparator = detailsTemplate.bind({});
standardSeparator.storyName = 'Separator';

standardSeparator.args = {
  variant: 'solid',
  hasRole: false,
};

standardSeparator.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};

import { Meta, moduleMetadata } from '@storybook/angular';

import { LgHideAtDirective } from '../../hide-at';
import { LgCardComponent, LgCardContentComponent } from '../../card';
import { LgSeparatorComponent } from '../../separator';

// This default export determines where your story goes in the story list
export default {
  title: 'Helpers/Directives/Hide at/Examples',
  component: LgHideAtDirective,
  decorators: [
    moduleMetadata({
      imports: [
        LgCardComponent,
        LgCardContentComponent,
        LgHideAtDirective,
        LgSeparatorComponent,
      ],
    }),
  ],
  argTypes: {
    lgHideAt: {
      options: [ 'sm', 'md', 'lg', 'xl', 'xxl' ],
      description: 'The name of the breakpoint applied.',
      table: {
        type: {
          summary: 'sm,md,lg,xl,xxl',
        },
      },
      control: {
        type: 'select',
      },
    },
    responsiveUtilClass: {
      table: {
        disable: true,
      },
    },
    toggleClass: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const directiveTemplate = `
<lg-card [lgHideAt]="lgHideAt">
  <lg-card-content>
    Now you see me...
  </lg-card-content>
</lg-card>
`;

const template = `
<p><strong>Change viewport width to see the card appear at specified breakpoint</strong></p>
<pre>lgHideAt="{{lgHideAt}}"</pre>
<lg-separator></lg-separator>
${directiveTemplate}
`;

export const HideAtStory = {
  name: 'Hide at',
  render: (args: LgHideAtDirective) => ({
    props: args,
    template,
  }),
  args: {
    lgHideAt: 'md',
  },
  parameters: {
    docs: {
      source: {
        code: directiveTemplate,
      },
    },
  },
};

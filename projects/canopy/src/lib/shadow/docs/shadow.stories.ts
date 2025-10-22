import { Meta, moduleMetadata } from '@storybook/angular';

import { LgShadowDirective } from '../shadow.directive';
import { LgCardComponent, LgCardContentComponent } from '../../card';

const template = `
  <!-- lgShadow without hover state -->
  <lg-card lgShadow>
    <lg-card-content>
      Look, I have a shadow
    </lg-card-content>
  </lg-card>

  <!-- lgShadow with hover state -->
  <lg-card lgShadow [hasHoverState]="hasHoverState">
    <lg-card-content>
      Look, I have a shadow
    </lg-card-content>
  </lg-card>
`;

// This default export determines where your story goes in the story list
export default {
  title: 'Helpers/Directives/Shadow/Examples',
  tags: [ 'pending' ],
  component: LgShadowDirective,
  decorators: [
    moduleMetadata({
      imports: [ LgCardComponent, LgCardContentComponent ],
    }),
  ],
  globals: {
    backgrounds: { value: 'off-white' },
  },
  argTypes: {
    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const Shadow = {
  name: 'Shadow',
  render: (args: { hasHoverState: boolean }) => ({
    props: args,
    template,
  }),
  args: {
    hasHoverState: false,
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};

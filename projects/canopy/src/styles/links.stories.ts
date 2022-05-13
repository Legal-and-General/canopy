import { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { LgAlertModule } from '../lib/alert';
import { LgMarginModule } from '../lib/spacing';

import { notes } from './links.notes';

const template = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href="#">Inline link example</a> and <a href="#" style="display: inline-block">inline block link example</a>
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<lg-alert variant="generic" lgMarginTop="lg">Example of <a href="#">link text</a> within an alert.</lg-alert>
<lg-alert variant="info">Example of <a href="#">link text</a> within an alert.</lg-alert>
<lg-alert variant="success">Example of <a href="#">link text</a> within an alert.</lg-alert>
<lg-alert variant="error">Example of <a href="#">link text</a> within an alert.</lg-alert>
`;

export default {
  title: 'Style/Links',
  decorators: [
    moduleMetadata({
      imports: [ LgAlertModule, LgMarginModule ],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
} as Meta;

const linksTemplate: Story = () => ({
  template,
});

export const links = linksTemplate.bind({});
links.storyName = 'Links';

links.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};

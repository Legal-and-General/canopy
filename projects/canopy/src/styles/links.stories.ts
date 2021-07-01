import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { notes } from './links.notes';
import { LgAlertModule } from '../lib/alert';
import { LgMarginModule } from '../lib/spacing';

export default {
  title: 'Links',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgAlertModule, LgMarginModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const links = () => ({
  template: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href="#">Inline link example</a> and <a href="#" style="display: inline-block">inline block link example</a>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    <lg-alert variant="generic" lgMarginTop="lg">Example of <a href="#">link text</a> within an alert.</lg-alert>
    <lg-alert variant="info">Example of <a href="#">link text</a> within an alert.</lg-alert>
    <lg-alert variant="success">Example of <a href="#">link text</a> within an alert.</lg-alert>
    <lg-alert variant="error">Example of <a href="#">link text</a> within an alert.</lg-alert>
`,
});

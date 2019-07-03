import { addDecorator, configure } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

function loadStories() {
  require('!style-loader!css-loader!sass-loader!../projects/canopy/src/styles/styles.scss');
  require('../projects/canopy/src/lib/button/button.stories');
  require('../projects/canopy/src/lib/feature-toggle/feature-toggle.stories');
  require('../projects/canopy/src/styles/typography.stories');
}

configure(loadStories, module);



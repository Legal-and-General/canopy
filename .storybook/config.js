import { addDecorator, configure } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import cssVars from 'css-vars-ponyfill';

addDecorator(withA11y);

function loadStories() {
  require('!style-loader!css-loader!sass-loader!../projects/canopy/src/styles/styles.scss');
  require('../projects/canopy/src/lib/canopy.stories');
  require('../projects/canopy/src/lib/alert/alert.stories');
  require('../projects/canopy/src/lib/button/button.stories');
  require('../projects/canopy/src/lib/card/card/card.stories');
  require('../projects/canopy/src/lib/feature-toggle/feature-toggle.stories');
  require('../projects/canopy/src/lib/focus/focus.stories');
  require('../projects/canopy/src/lib/footer/footer.stories');
  require('../projects/canopy/src/lib/forms/checkbox/checkbox.stories');
  require('../projects/canopy/src/lib/forms/input/input.stories');
  require('../projects/canopy/src/lib/forms/radio/radio.stories');
  require('../projects/canopy/src/lib/forms/select/select.stories');
  require('../projects/canopy/src/lib/header/header.stories');
  require('../projects/canopy/src/lib/heading/heading.stories');
  require('../projects/canopy/src/lib/margin/margin.stories');
  require('../projects/canopy/src/lib/page/page.stories');
  require('../projects/canopy/src/lib/pipes/camel-case/camel-case.stories');
  require('../projects/canopy/src/lib/pipes/kebab-case/kebab-case.stories');
  require('../projects/canopy/src/lib/spinner/spinner.stories');
  require('../projects/canopy/src/styles/color.stories');
  require('../projects/canopy/src/styles/typography.stories');
}

cssVars({
  watch: true
});

configure(loadStories, module);

import { addDecorator, configure } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import cssVars from 'css-vars-ponyfill';

addDecorator(withA11y);

function loadStories() {
  require('!style-loader!css-loader!sass-loader!../projects/canopy/src/styles/styles.scss');
  require('../projects/canopy/src/lib/accordion/accordion.stories');
  require('../projects/canopy/src/lib/alert/alert.stories');
  require('../projects/canopy/src/lib/breadcrumb/breadcrumb.stories');
  require('../projects/canopy/src/lib/button/button.stories');
  require('../projects/canopy/src/lib/canopy.stories');
  require('../projects/canopy/src/lib/card/card.stories');
  require('../projects/canopy/src/lib/details/details.stories');
  require('../projects/canopy/src/lib/feature-toggle/feature-toggle.stories');
  require('../projects/canopy/src/lib/focus/focus.stories');
  require('../projects/canopy/src/lib/footer/footer.stories');
  require('../projects/canopy/src/lib/forms/date/date-field.stories');
  require('../projects/canopy/src/lib/forms/input/input.stories');
  require('../projects/canopy/src/lib/forms/radio/radio.stories');
  require('../projects/canopy/src/lib/forms/select/select.stories');
  require('../projects/canopy/src/lib/forms/toggle/toggle.stories');
  require('../projects/canopy/src/lib/forms/validation/form.stories');
  require('../projects/canopy/src/lib/forms/validation/validation.stories');
  require('../projects/canopy/src/lib/grid/grid.stories');
  require('../projects/canopy/src/lib/header/header.stories');
  require('../projects/canopy/src/lib/heading/heading.stories');
  require('../projects/canopy/src/lib/hero/hero.stories');
  require('../projects/canopy/src/lib/icon/icons.stories');
  require('../projects/canopy/src/lib/margin/margin.stories');
  require('../projects/canopy/src/lib/page/page.stories');
  require('../projects/canopy/src/lib/padding/padding.stories');
  require('../projects/canopy/src/lib/pipes/camel-case/camel-case.stories');
  require('../projects/canopy/src/lib/pipes/kebab-case/kebab-case.stories');
  require('../projects/canopy/src/lib/separator/separator.stories');
  require('../projects/canopy/src/lib/spinner/spinner.stories');
  require('../projects/canopy/src/styles/color.stories');
  require('../projects/canopy/src/styles/grid.stories');
  require('../projects/canopy/src/styles/mixins.stories');
  require('../projects/canopy/src/styles/spacing.stories');
  require('../projects/canopy/src/styles/typography.stories');
  require('../projects/canopy/src/styles/utils.stories');
}

cssVars({
  watch: true
});

configure(loadStories, module);

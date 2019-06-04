import { addDecorator, configure } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

function loadStories() {
  const req = require.context(
    '../projects/canopy/src/lib',
    true,
    /\.stories\.ts$/
  );
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);



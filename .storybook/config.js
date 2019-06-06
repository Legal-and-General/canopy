import { addDecorator, configure } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import '!style-loader!css-loader!sass-loader!../projects/canopy/src/styles/styles.scss';


addDecorator(withA11y);

function loadStories() {
  const req = require.context(
    '../projects/canopy/src/',
    true,
    /\.stories\.ts$/
  );
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);



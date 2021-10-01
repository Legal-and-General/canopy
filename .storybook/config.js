import { addDecorator, addParameters, configure } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';

addParameters({
  backgrounds: [
    { name: 'Default', value: 'transparent', default: true },
    { name: 'Midnight Blue', value: '#005380' },
    { name: 'Charcoal', value: '#333' },
    { name: 'Super Blue', value: '#0076d6' },
    { name: 'Leafy Green', value: '#028844' },
  ],
});

addParameters({ docs: { page: null } });
addDecorator(withA11y);

require('!style-loader!css-loader!sass-loader!../projects/canopy/src/styles/styles.scss');
configure(require.context('../projects/canopy', true, /\.stories\.ts$/), module);


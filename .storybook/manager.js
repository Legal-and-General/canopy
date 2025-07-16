import { addons } from 'storybook/manager-api';
import canopyTheme from './canopy-theme';

addons.setConfig({
  theme: canopyTheme,
});

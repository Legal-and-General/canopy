import { addons } from '@storybook/addons';
import canopyTheme from './canopy-theme';

addons.setConfig({
  theme: canopyTheme,
});

const CSS_TO_HIDE_INTERNAL_STORY_FROM_SIDEBAR = `
#internal,
*[id*="internal"],
*[data-parent-id*="internal"],
*[title*="internal"] {
  display: none !important;
}
`;

if (process.env.NODE_ENV !== 'development') {
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  head.appendChild(style);
  style.appendChild(
    document.createTextNode(CSS_TO_HIDE_INTERNAL_STORY_FROM_SIDEBAR)
  );
}

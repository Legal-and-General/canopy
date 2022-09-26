import { addons } from '@storybook/addons';
import canopyTheme from './canopy-theme';

addons.setConfig({
  theme: canopyTheme,
});

/*
* The code below allows us to hide stories form the sidebar. This is needed for documentation
* such as `colours` where we use the `.mdx` file to import stories snippets. Having story snippets
* requires us to have a `.stories.ts` file added to the `main.js` which automatically gets added to the sidebar.
* https://github.com/storybookjs/storybook/issues/9209#issuecomment-1169846556
*/
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

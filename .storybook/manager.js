import { addons } from '@storybook/addons';
import canopyTheme from './canopy-theme';

addons.setConfig({
  theme: canopyTheme,
});

/*
* The code below fixes a bug with Storybook where clicking on the 'Guide' and then on one of the 'Examples'
* would show the Docs tab even though it's disabled.
* This bug might be fixed when the following issue is resolved: https://github.com/storybookjs/storybook/issues/18225
*/
document.addEventListener('click', ({ target }) => {
  if (target.classList.contains('sidebar-item')) {
    for (const canvasButton of document.querySelectorAll('button[type="button"]')) {
      if (canvasButton.textContent.includes('Canvas')) {
        canvasButton.click();
      }
    }
  }
});

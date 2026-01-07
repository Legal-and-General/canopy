import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import canopyTheme from "./canopy-theme";

setCompodocJson(docJson);

const preview = {
  parameters: {
    controls: {
      expanded: true
    },
    backgrounds: {
      options: {
        // Default colors
        light: { name: 'Light', value: '#FFFFFF' },
        dark: { name: 'Dark', value: '#1d1d1b' },
        // Custom colors
        'regal-blue': { name: 'Regal Blue', value: '#001d6e'},
        'off-black': {name: 'Off Black', value: '#1d1d1b'},
        'breezy-blue': {name: 'Breezy Blue', value: '#005dba'},
        'plush-green': {name: 'Plush Green', value: '#00633d'},
        'off-white': {name: 'Off White', value: '#f4f4f4'},
      },
    },
    docs: {
      inlineStories: true,
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h2',
        disable: false,
      },
      source: {
        type: 'code',
        state: 'open',
      },
      theme: canopyTheme,
    }
  },
  decorators: [
  (Story, context) => {
    setTimeout(() => {
      if (context.title === 'Welcome') {
        const toc = document.querySelector('.sbdocs');
        const tocWrapper = document.querySelector('nav');
        if (tocWrapper) tocWrapper.style.display = 'none';
      }
    }, 100);

    return Story();
  }
],
  initialGlobals: {
    // Set the initial background color
    backgrounds: { value: 'light' },
  },
};
export default preview;

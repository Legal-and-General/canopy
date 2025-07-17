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
        dark: { name: 'Dark', value: '#333' },
        // Custom colors
        'midnight-blue': { name: 'Midnight Blue', value: '#005380'},
        'charcoal': {name: 'Charcoal', value: '#333'},
        'super-blue': {name: 'Super Blue', value: '#0076d6'},
        'leafy-green': {name: 'Leafy Green', value: '#028844'},
        'white-smoke': {name: 'White Smoke', value: '#f6f6f6'},
      },
    },
    docs: {
      inlineStories: true,
      source: {
        type: 'code',
        state: 'open',
      },
      theme: canopyTheme,
    }
  },
  percy: {
    waitForTimeout: 500 // Wait for half a second to ensure all elements are rendered before taking a snapshot
  },
  initialGlobals: {
    // Set the initial background color
    backgrounds: { value: 'light' },
  },
};
export default preview;

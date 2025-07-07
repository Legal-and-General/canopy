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
      default: 'Default',
      values: [
        {name: 'Default', value: 'transparent'},
        {name: 'Midnight Blue', value: '#005380'},
        {name: 'Charcoal', value: '#333'},
        {name: 'Super Blue', value: '#0076d6'},
        {name: 'Leafy Green', value: '#028844'},
        {name: 'White Smoke', value: '#f6f6f6'},
      ],
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
  }
};
export default preview;

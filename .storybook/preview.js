import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from '../documentation.json';
import cssVars from 'css-vars-ponyfill';
import { addParameters } from '@storybook/angular';

setCompodocJson(docJson);

cssVars({
  watch: true,
});

addParameters({
  docs: {
    inlineStories: true,
    source: {
      type: 'code',
      state: 'open',
    }
  }
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true
  },
  backgrounds: {
    default: 'Default',
    values: [
      { name: 'Default', value: 'transparent' },
      { name: 'Midnight Blue', value: '#005380' },
      { name: 'Charcoal', value: '#333' },
      { name: 'Super Blue', value: '#0076d6' },
      { name: 'Leafy Green', value: '#028844' },
      { name: 'White Smoke', value: '#f6f6f6' },
    ],
  }
};

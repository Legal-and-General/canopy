import { addons } from 'storybook/manager-api';
import canopyTheme from './canopy-theme';
import { defaultConfig } from 'storybook-addon-tag-badges/manager-helpers';

addons.setConfig({
  tagBadges: [
    {
      tags: 'pending',
      badge: {
        text: 'Pending',
        style: {
          backgroundColor: '#aee1f7',
          color: '#1d1d1b',
          fontWeight: 'normal',
          fontSize: '10px !important',
        },
        tooltip: 'Due for brand modernisation',
      },
      display: {
        sidebar: [
        {
            type: 'group',
            skipInherited: false,
        },
      ],
        toolbar: true,
        mdx: true,
      },
    },
    {
      tags: 'pending-docs',
      badge: {
        text: 'Pending',
        style: {
          backgroundColor: '#aee1f7',
          color: '#1d1d1b',
          fontWeight: 'normal',
          fontSize: '10px !important',
        },
        tooltip: 'Due for brand modernisation',
      },
      display: {
        sidebar: [
        {
            type: 'docs',
            skipInherited: false,
        }
      ],
        toolbar: true,
        mdx: true,
      },
    },
    ...defaultConfig,
  ],
  theme: canopyTheme
})


import { addons } from 'storybook/manager-api';
import canopyTheme from './canopy-theme';
import { defaultConfig } from 'storybook-addon-tag-badges/manager-helpers';

addons.setConfig({
  tagBadges: [
    {
      tags: 'updated',
      badge: {
        text: 'Updated',
        style: {
          backgroundColor: '#caeedd',
          color: '#1d1d1b',
          fontWeight: 'normal'
        },
        tooltip:
          'See the `Updated` tag in the guidance for the Canopy version in which these updates are available from.',
      },
      display: {
        sidebar: false,
        toolbar: true,
        mdx: true,
      },
    },
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
      tags: 'awaiting-deprecation',
      badge: {
        text: 'Awaiting deprecation',
        style: {
          backgroundColor: '#fff9c7',
          color: '#1d1d1b',
          fontWeight: 'normal',
          fontSize: '10px !important',
        },
        tooltip: 'This component will be deprecated in a future major release (date/version TBC).',
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
    ...defaultConfig,
  ],
  theme: canopyTheme
})


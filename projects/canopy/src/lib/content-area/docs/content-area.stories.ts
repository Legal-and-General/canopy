import { Meta, moduleMetadata } from '@storybook/angular';

import { LgContentAreaComponent } from '../content-area.component';
import { LgContentAreaHeaderComponent } from '../content-area-header/content-area-header.component';
import { LgContentAreaContentComponent } from '../content-area-content/content-area-content.component';
import { LgContentAreaTitleComponent } from '../content-area-title/content-area-title.component';

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export default {
  title: 'Components/Content Area/Examples',
  component: LgContentAreaComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LgContentAreaComponent,
        LgContentAreaHeaderComponent,
        LgContentAreaContentComponent,
        LgContentAreaTitleComponent,
      ],
    }),
  ],
  argTypes: {
    class: {
      table: {
        disable: true,
      },
    },
    headingLevel: {
      options: [ '1', '2', '3', '4', '5', '6' ],
      description: 'The heading level for the title component',
      table: {
        type: {
          summary: '1 | 2 | 3 | 4 | 5 | 6',
        },
      },
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const standardTemplate = `
<lg-content-area>
  <lg-content-area-content>
    <p>{{content}}</p>
  </lg-content-area-content>
</lg-content-area>
`;

export const Standard = {
  name: 'Standard',
  args: {
    content: content,
  },
  parameters: {
    docs: {
      source: {
        code: standardTemplate,
      },
    },
  },
  render: (args: LgContentAreaComponent) => ({
    props: args,
    template: standardTemplate,
  }),
};

const contentAreaChildTemplate = `
<lg-content-area>
  <lg-content-area-header>
    <lg-content-area-title [headingLevel]="headingLevel">
      {{title}}
    </lg-content-area-title>
  </lg-content-area-header>
  <lg-content-area-content>
    <p>{{content}}</p>
  </lg-content-area-content>
</lg-content-area>
`;

export const ContentAreaChild = {
  name: 'With Header and Content',
  args: {
    headingLevel: 3,
    title: 'The title',
    content: content,
  },
  parameters: {
    docs: {
      source: {
        code: contentAreaChildTemplate,
      },
    },
  },
  render: (args: LgContentAreaComponent) => ({
    props: args,
    template: contentAreaChildTemplate,
  }),
};

const contentAreaExpressiveTemplate = `
<lg-content-area>
  <lg-content-area-header>
    <lg-content-area-title [headingLevel]="headingLevel" class="lg-font--expressive">
      {{title}}
    </lg-content-area-title>
  </lg-content-area-header>
  <lg-content-area-content>
    <p>{{content}}</p>
  </lg-content-area-content>
</lg-content-area>
`;

export const WithExpressiveType = {
  name: 'With Expressive Type',
  args: {
    headingLevel: 2,
    title: 'Expressive title',
    content: content,
  },
  parameters: {
    docs: {
      source: {
        code: contentAreaExpressiveTemplate,
      },
    },
  },
  render: (args: LgContentAreaComponent) => ({
    props: args,
    template: contentAreaExpressiveTemplate,
  }),
};

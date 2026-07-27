import { Meta, moduleMetadata } from '@storybook/angular';

import {
  BreadcrumbVariant,
  LgBreadcrumbComponent,
  LgBreadcrumbItemComponent,
  LgBreadcrumbItemEllipsisComponent,
} from '..';
import { LgIconComponent } from '../../icon';
import { LgColourDirective } from '../../colour';
import { LgContentAreaComponent } from '../../content-area/content-area.component';
import { LgContentAreaHeaderComponent } from '../../content-area/content-area-header/content-area-header.component';
import { LgContentAreaContentComponent } from '../../content-area/content-area-content/content-area-content.component';
import { LgContentAreaTitleComponent } from '../../content-area/content-area-title/content-area-title.component';

const colours = [ 'blue', 'green', 'red', 'yellow' ];
const themes = [ 'neutral', 'neutral-inverse', 'subtle', 'bold' ];

export default {
  title: 'Components/Breadcrumb/Examples',
  tags: [ 'updated' ],
  component: LgBreadcrumbComponent,
  parameters: {
    backgrounds: { disable: true },
  },
  decorators: [
    moduleMetadata({
      imports: [
        LgBreadcrumbComponent,
        LgBreadcrumbItemComponent,
        LgBreadcrumbItemEllipsisComponent,
        LgIconComponent,
        LgContentAreaComponent,
        LgContentAreaHeaderComponent,
        LgContentAreaContentComponent,
        LgContentAreaTitleComponent,
        LgColourDirective,
      ],
    }),
  ],
  argTypes: {
    variant: {
      options: [ BreadcrumbVariant.page, BreadcrumbVariant.embedded ],
      description:
        'The layout variant. Use "page" for full-page use within the grid container, or "embedded" for use within other components.',
      table: {
        type: {
          summary: `${BreadcrumbVariant.page}, ${BreadcrumbVariant.embedded}`,
        },
        defaultValue: {
          summary: BreadcrumbVariant.page,
        },
      },
      control: {
        type: 'select',
      },
    },
    attr: {
      table: {
        disable: true,
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    role: {
      table: {
        disable: true,
      },
    },
    ngAfterContentChecked: {
      table: {
        disable: true,
      },
    },
    crumbs: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
<lg-breadcrumb [variant]="variant">
  <lg-breadcrumb-item>
    <a href="#">
      <lg-icon [name]="'home-outline'"></lg-icon>
      Home
    </a>
  </lg-breadcrumb-item>
  <lg-breadcrumb-item>
    <a href="#">Products</a>
  </lg-breadcrumb-item>
  <lg-breadcrumb-item>
    Pension Annuity
  </lg-breadcrumb-item>
</lg-breadcrumb>
`;

export const ThreeItems = {
  name: 'Three items',
  render: (args: LgBreadcrumbComponent) => ({
    props: args,
    template,
  }),
  args: {
    variant: BreadcrumbVariant.page,
  },
  globals: {
    backgrounds: { value: 'light' },
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
    percy: {
      additionalSnapshots: [
        {
          suffix: ' [embedded]',
          args: { variant: BreadcrumbVariant.embedded },
        },
      ],
    },
  },
};

const ellipisTemplate = `
<lg-breadcrumb [variant]="variant">
  <lg-breadcrumb-item>
    <a href="#">
      <lg-icon [name]="'home-outline'"></lg-icon>
      Home
    </a>
  </lg-breadcrumb-item>

  <!-- Epllipsis -->
  <lg-breadcrumb-item-ellipsis></lg-breadcrumb-item-ellipsis>

  <lg-breadcrumb-item>
    <a href="#">Products</a>
  </lg-breadcrumb-item>
  <lg-breadcrumb-item>
    Pension Annuity
  </lg-breadcrumb-item>
</lg-breadcrumb>
`;

export const Ellipsis = {
  name: 'More than three items',
  render: (args: LgBreadcrumbComponent) => ({
    props: args,
    template: ellipisTemplate,
  }),
  args: {
    variant: BreadcrumbVariant.page,
  },
  globals: {
    backgrounds: { value: 'light' },
  },
  parameters: {
    docs: {
      source: {
        code: ellipisTemplate,
      },
    },
    percy: {
      additionalSnapshots: [
        {
          suffix: ' [embedded]',
          args: { variant: BreadcrumbVariant.embedded },
        },
      ],
    },
  },
};

const embeddedTemplate = `
<div lgContainer>
  <div lgRow>
    <div lgCol="10" lgColLg="6" lgColMd="10">
      <lg-content-area
      variant="default"
      [lgColour]="colour"
      [lgColourTheme]="theme">
        <lg-content-area-content>
              <lg-breadcrumb variant="embedded">
            <lg-breadcrumb-item>
              <a href="#">
                <lg-icon [name]="'home-outline'"></lg-icon>
                Home
              </a>
            </lg-breadcrumb-item>
            <lg-breadcrumb-item>
              <a href="#">Products</a>
            </lg-breadcrumb-item>
            <lg-breadcrumb-item>
              Pension Annuity
            </lg-breadcrumb-item>
          </lg-breadcrumb>
          <lg-content-area-title>Pension Annuity</lg-content-area-title>
        </lg-content-area-content>
      </lg-content-area>
    </div>
  </div>
</div>
`;

export const EmbeddedInContentArea = {
  name: 'Embedded in content area',
  render: (args: LgContentAreaComponent) => ({
    props: args,
    template: embeddedTemplate,
  }),
  args: {
    colour: 'blue',
    theme: 'neutral-inverse',
  },
  globals: {
    backgrounds: { value: 'light' },
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
    colour: {
      options: colours,
      description: 'The colour to apply to the component.',
      table: {
        type: {
          summary: colours,
        },
      },
      control: {
        type: 'select',
      },
    },
    theme: {
      options: themes,
      description:
        'Optional theme for colour classes. When provided, applies lg-mode-{colour} and lg-theme-{theme} classes. Defaults to neutral.',
      table: {
        type: {
          summary: themes,
        },
        defaultValue: {
          summary: 'neutral',
        },
      },
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: embeddedTemplate,
      },
    },
  },
};

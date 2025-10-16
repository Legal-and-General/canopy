import { Meta, moduleMetadata } from '@storybook/angular';

import {
  BreadcrumbVariant,
  LgBreadcrumbComponent,
  LgBreadcrumbItemComponent,
  LgBreadcrumbItemEllipsisComponent,
} from '..';
import { LgIconComponent } from '../../icon';

export default {
  title: 'Components/Breadcrumb/Examples',
  component: LgBreadcrumbComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LgBreadcrumbComponent,
        LgBreadcrumbItemComponent,
        LgBreadcrumbItemEllipsisComponent,
        LgIconComponent,
      ],
    }),
  ],
  argTypes: {
    variant: {
      options: [ BreadcrumbVariant.light, BreadcrumbVariant.dark ],
      description: 'The colour variant for use on light or dark backgrounds',
      table: {
        type: {
          summary: `${BreadcrumbVariant.light}, ${BreadcrumbVariant.dark}`,
        },
        defaultValue: {
          summary: BreadcrumbVariant.dark,
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
    ellipsis: {
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
      <lg-icon [name]="'home'"></lg-icon>
      Home
    </a>
  </lg-breadcrumb-item>
  <lg-breadcrumb-item>
    <a href="#">Products</a>
  </lg-breadcrumb-item>
  <lg-breadcrumb-item>
    <a href="#">Pension Annuity</a>
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
    variant: BreadcrumbVariant.dark,
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
          suffix: ' [light]',
          args: { variant: BreadcrumbVariant.light },
          globals: {
            backgrounds: { value: 'dark' },
          },
        },
      ],
    },
  },
};

const ellipisTemplate = `
<lg-breadcrumb [variant]="variant">
  <lg-breadcrumb-item>
    <a href="#">
      <lg-icon [name]="'home'"></lg-icon>
      Home
    </a>
  </lg-breadcrumb-item>

  <!-- Epllipsis -->
  <lg-breadcrumb-item-ellipsis></lg-breadcrumb-item-ellipsis>

  <lg-breadcrumb-item>
    <a href="#">Products</a>
  </lg-breadcrumb-item>
  <lg-breadcrumb-item>
    <a href="#">Pension Annuity</a>
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
    variant: BreadcrumbVariant.dark,
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
          suffix: ' [light]',
          args: { variant: BreadcrumbVariant.light },
          globals: {
            backgrounds: { value: 'dark' },
          },
        },
      ],
    },
  },
};

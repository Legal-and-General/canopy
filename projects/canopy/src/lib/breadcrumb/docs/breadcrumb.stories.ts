import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

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
          summary: [ BreadcrumbVariant.light, BreadcrumbVariant.dark ],
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

const breadcrumbTemplate: StoryFn<LgBreadcrumbComponent> = (
  args: LgBreadcrumbComponent,
) => ({
  props: args,
  template,
});

export const threeItems = breadcrumbTemplate.bind({});
threeItems.storyName = 'Three items';

threeItems.args = {
  variant: BreadcrumbVariant.dark,
};

threeItems.parameters = {
  docs: {
    source: {
      code: template,
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

const breadcrumbEllipsisTemplate: StoryFn<LgBreadcrumbComponent> = (
  args: LgBreadcrumbComponent,
) => ({
  props: args,
  template: ellipisTemplate,
});

export const ellipsis = breadcrumbEllipsisTemplate.bind({});
ellipsis.storyName = 'More than three items';

ellipsis.args = {
  variant: BreadcrumbVariant.dark,
};

ellipsis.parameters = {
  docs: {
    source: {
      code: ellipisTemplate,
    },
  },
};

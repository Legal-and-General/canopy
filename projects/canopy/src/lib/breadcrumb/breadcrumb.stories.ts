import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgIconModule } from '../icon/icon.module';

import { LgBreadcrumbModule } from './breadcrumb.module';
import { notes } from './breadcrumb.notes';

import { BreadcrumbVariant, LgBreadcrumbComponent } from '.';

export default {
  title: 'Components/Breadcrumb',
  component: LgBreadcrumbComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgIconModule, LgBreadcrumbModule ],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
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

const breadcrumbTemplate: Story<LgBreadcrumbComponent> = (
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

const breadcrumbEllipsisTemplate: Story<LgBreadcrumbComponent> = (
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

import { Meta, moduleMetadata } from '@storybook/angular';
import { Component, Input } from '@angular/core';

import { LgValidationComponent } from '../validation.component';

const variantTypes = [ 'generic', 'info', 'success', 'warning', 'error' ];

const template = `
<lg-validation
  [showIcon]="showIcon"
  [variant]="variant">
  {{content}}
</lg-validation>
`;

@Component({
  selector: 'lg-validation-example',
  template: template,
  imports: [ LgValidationComponent ],
})
class LgValidationExampleComponent {
  @Input() variant: string;
  @Input() content: string;
  @Input() showIcon: boolean;
}

export default {
  title: 'Components/Forms/Form validation/Examples',
  component: LgValidationComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgValidationExampleComponent ],
    }),
  ],
  argTypes: {
    content: {
      description: 'The projected content.',
    },
    showIcon: {
      description:
        'Whether the icon should display on the warning, error or success variants.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
    variant: {
      options: variantTypes,
      description: 'The variant of the validation.',
      table: {
        type: {
          summary: variantTypes.join(','),
        },
        defaultValue: {
          summary: 'error',
        },
      },
      control: {
        type: 'select',
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    _variant: {
      table: {
        disable: true,
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const Validation = {
  name: 'Validation',
  render: (args: LgValidationComponent) => ({
    props: args,
    template: `<lg-validation-example
      [variant]="variant"
      [showIcon]="showIcon"
      [content]="content"
     ></lg-validation-example>`,
  }),
  args: {
    content: 'Please enter a valid date of birth',
    variant: 'error',
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};

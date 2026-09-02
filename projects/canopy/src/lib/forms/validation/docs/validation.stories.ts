import { Meta, moduleMetadata } from '@storybook/angular';
import { Component, Input } from '@angular/core';

import { LgValidationComponent } from '../validation.component';
import { LgValidationWrapperDirective } from '../validation-wrapper.directive';
import { LgInputDirective, LgInputFieldComponent } from '../../input';

const statusTypes = [ 'generic', 'info', 'success', 'warning', 'error' ];

const template = `
<lg-validation
  [showIcon]="showIcon"
  [status]="status"
  [statusTheme]="statusTheme">
  {{content}}
</lg-validation>
`;

@Component({
  selector: 'lg-validation-example',
  template: template,
  imports: [ LgValidationComponent ],
})
class LgValidationExampleComponent {
  @Input() status: string;
  @Input() statusTheme: string;
  @Input() content: string;
  @Input() showIcon: boolean;
}

const wrapperTemplate = `
<lg-input-field>
  Username
  <lg-my-error lgValidationWrapper>
    <lg-validation>Enter a username</lg-validation>
  </lg-my-error>
  <input lgInput />
</lg-input-field>
`;

@Component({
  selector: 'lg-my-error',
  template: '<ng-content />',
})
class MyErrorComponent {}

@Component({
  selector: 'lg-validation-wrapper-example',
  template: wrapperTemplate,
  imports: [
    LgInputFieldComponent,
    LgInputDirective,
    LgValidationComponent,
    LgValidationWrapperDirective,
    MyErrorComponent,
  ],
})
class LgValidationWrapperExampleComponent {}

export default {
  title: 'Components/Forms/Form validation/Examples',
  tags: [ 'updated' ],
  component: LgValidationComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgValidationExampleComponent, LgValidationWrapperExampleComponent ],
    }),
  ],
  argTypes: {
    content: {
      description: 'The projected content.',
    },
    showIcon: {
      description:
        'Whether the icon should display on the warning, error or success statuses.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
    status: {
      options: statusTypes,
      description: 'The status of the validation.',
      table: {
        type: {
          summary: statusTypes.join(','),
        },
        defaultValue: {
          summary: 'error',
        },
      },
      control: {
        type: 'select',
      },
    },
    statusTheme: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    _status: {
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
      [status]="status"
      [statusTheme]="statusTheme"
      [showIcon]="showIcon"
      [content]="content"
     ></lg-validation-example>`,
  }),
  args: {
    content: 'Please enter a valid date of birth',
    status: 'error',
    statusTheme: 'neutral',
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};

export const ValidationWrapper = {
  name: 'Validation wrapper',
  render: () => ({
    template: '<lg-validation-wrapper-example />',
  }),
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      source: {
        code: wrapperTemplate,
      },
    },
  },
};

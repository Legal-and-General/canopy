import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { LgValidationModule } from '../validation.module';
import { LgValidationComponent } from '../validation.component';

const variantTypes = [ 'generic', 'info', 'success', 'warning', 'error' ];

export default {
  title: 'Components/Forms/Form validation/Examples',
  component: LgValidationComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgValidationModule ],
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
          summary: true,
        },
      },
    },
    variant: {
      options: variantTypes,
      description: 'The variant of the validation.',
      table: {
        type: {
          summary: variantTypes,
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

const template = `
<lg-validation
  [showIcon]="showIcon"
  [variant]="variant">
  {{content}}
</lg-validation>
`;

const validationStory: StoryFn<LgValidationModule> = (args: LgValidationModule) => ({
  props: args,
  template,
});

export const validation = validationStory.bind({});
validation.storyName = 'Validation';

validation.args = {
  content: 'Please enter a valid date of birth',
  variant: 'error',
};

validation.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};

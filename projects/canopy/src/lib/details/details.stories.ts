import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgHeadingModule } from '../heading';
import { LgDetailsModule } from './details.module';
import { notes } from './details.notes';
import { LgIconModule } from '../icon';
import { LgDetailsComponent } from './details.component';

const variantTypes = ['generic', 'info', 'success', 'warning', 'error'];

export default {
  title: 'Components/Details',
  component: LgDetailsComponent,
  decorators: [
    moduleMetadata({
      imports: [LgDetailsModule, LgHeadingModule, LgIconModule],
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
    toggle: {
      action: 'Toggle Item',
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
      description: 'Applies colour treatment and ARIA role if applicable.',
      table: {
        type: {
          summary: variantTypes,
        },
        defaultValue: {
          summary: 'generic',
        },
      },
      control: {
        type: 'select',
      },
    },
    headingLevel: {
      options: ['1', '2', '3', '4', '5', '6'],
      description: 'The level of the details heading.',
      table: {
        type: {
          summary: ['1', '2', '3', '4', '5', '6'],
        },
        defaultValue: {
          summary: '5',
        },
      },
      control: {
        type: 'select',
      },
    },
    isActive: {
      description: 'Whether the details should be expanded.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    closed: {
      description: 'Event emitted when the details are closed',
    },
    opened: {
      description: 'Event emitted when the details are opened',
    },
    _showIcon: {
      table: {
        disable: true,
      },
    },
    _variant: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    panelId: {
      table: {
        disable: true,
      },
    },
    toggleId: {
      table: {
        disable: true,
      },
    },
    ngAfterContentInit: {
      table: {
        disable: true,
      },
    },
    ngOnDestroy: {
      table: {
        disable: true,
      },
    },
    panelHeading: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
  <lg-details
    [isActive]="isActive"
    [variant]="variant"
    [showIcon]="showIcon"
    (opened)="toggle('Detail opened')"
    (closed)="toggle('Detail closed')">
    <lg-details-panel-heading [headingLevel]="headingLevel">How do I change my payment details?</lg-details-panel-heading>
    Give us a call on <a href="tel:08001234567">0800 123 4567</a> and we'll be happy to help you change your
    payment details
  </lg-details>
`;

const detailsTemplate: Story<LgDetailsComponent> = (args: LgDetailsComponent) => ({
  props: args,
  template,
});

export const standardDetails = detailsTemplate.bind({});
standardDetails.storyName = 'Standard';
standardDetails.args = {
  variant: 'generic',
  headingLevel: 5,
};
standardDetails.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};

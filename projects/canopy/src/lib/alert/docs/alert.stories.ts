import { Meta, moduleMetadata } from '@storybook/angular';

import { LgAlertComponent } from '../alert.component';

const statusTypes = [ 'generic', 'info', 'success', 'warning', 'error' ];

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Inline message (Alert)/Examples',
  tags: [ 'pending' ],
  component: LgAlertComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgAlertComponent ],
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
      description: 'Applies status treatment and ARIA role if applicable.',
      table: {
        type: {
          summary: statusTypes.join(','),
        },
        defaultValue: {
          summary: 'generic',
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
    role: {
      description: 'The ARIA role for the alert.',
      defaultValue: '',
    },
    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
<lg-alert
  [showIcon]="showIcon"
  [status]="status"
  [role]="role"
>
  {{content}} Here is some <a href="#"> link text</a>.
</lg-alert>
`;

export const StandardAlert = {
  name: 'Inline message',
  render: (args: LgAlertComponent) => ({
    props: args,
    template: `
<lg-alert
  [showIcon]="showIcon"
  [status]="status"
  [statusTheme]="statusTheme"
  [role]="role"
>
  {{content}} Here is some <a href="#"> link text</a>.
</lg-alert>
`,
  }),
  args: {
    content: 'This is an inline message.',
    status: 'generic',
    statusTheme: 'neutral',
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
    percy: {
      additionalSnapshots: [
        { suffix: ' [info]', args: { status: 'info' } },
        { suffix: ' [success]', args: { status: 'success' } },
        { suffix: ' [warning]', args: { status: 'warning' } },
        { suffix: ' [error]', args: { status: 'error' } },
        { suffix: ' [with icon]', args: { status: 'info', showIcon: true } },
        { suffix: ' [info-bold]', args: { status: 'info', statusTheme: 'bold' } },
        {
          suffix: ' [success-subtle]',
          args: { status: 'success', statusTheme: 'subtle' },
        },
      ],
    },
  },
};

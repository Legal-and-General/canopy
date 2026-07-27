import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata } from '@storybook/angular';

import { LgAlertComponent } from '../alert.component';
import { LgButtonComponent } from '../../button';
import type { IconName } from '../../icon';
import type { Status } from '../../status';
// Direct import required for Webpack compatibility - do not use barrel file
import { lgIconsArray } from '../../ui-icons-files/set/lgIconsArray';

const statusTypes: Array<Status> = [ 'generic', 'info', 'success', 'warning', 'error' ];

interface AlertStoryArgs {
  content: string;
  headingText: string;
  strongText: string;
  inlineLinkText: string;
  linkText: string;
  showLink: boolean;
  showIcon: boolean;
  icon: IconName;
  status: Status;
  statusTheme: string;
  role?: string;
}

@Component({
  selector: 'lg-alert-story',
  template: `
    <lg-alert
      [status]="status"
      [statusTheme]="statusTheme"
      [showIcon]="showIcon"
      [icon]="icon"
    >
      <p>{{ content }}</p>
      @if (showLink) {
        <a href="#">{{ linkText }}</a>
      }
    </lg-alert>
  `,
  imports: [ LgAlertComponent, LgButtonComponent ],
})
class LgAlertStoryComponent {
  @Input() content = '';
  @Input() headingText = '-';
  @Input() strongText = '-';
  @Input() inlineLinkText = '-';
  @Input() linkText = '';
  @Input() showLink = true;
  @Input() status: Status = 'generic';
  @Input() statusTheme = 'neutral';
  @Input() showIcon = true;
  @Input() icon?: IconName;
}

@Component({
  selector: 'lg-alert-rich-text-story',
  template: `
    <lg-alert
      [status]="status"
      [statusTheme]="statusTheme"
      [showIcon]="showIcon"
      [icon]="icon"
    >
      @if (headingText && headingText !== '-') {
        <h3>{{ headingText }}</h3>
      }
      <p>
        @if (strongText && strongText !== '-') {
          <strong>{{ strongText }}</strong>
        }
        {{ content }}
        @if (inlineLinkText && inlineLinkText !== '-') {
          <a href="#">{{ inlineLinkText }}</a
          >.
        }
      </p>
      @if (showLink) {
        <a href="#">{{ linkText }}</a>
      }
    </lg-alert>
  `,
  imports: [ LgAlertComponent, LgButtonComponent ],
})
class LgAlertRichTextStoryComponent {
  @Input() content = '';
  @Input() headingText = 'Heading example';
  @Input() strongText = 'strong text example';
  @Input() inlineLinkText = 'link text';
  @Input() linkText = '';
  @Input() showLink = true;
  @Input() status: Status = 'generic';
  @Input() statusTheme = 'neutral';
  @Input() showIcon = true;
  @Input() icon?: IconName;
}

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Inline message (Alert)/Examples',
  tags: [ 'updated' ],
  component: LgAlertComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgAlertStoryComponent, LgAlertRichTextStoryComponent ],
    }),
  ],
  argTypes: {
    content: {
      description: 'The projected content.',
    },
    headingText: {
      description: 'Optional heading text for rich content',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
    strongText: {
      description: 'Optional strong lead-in text for rich content',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
    inlineLinkText: {
      description: 'Optional inline link text for rich content',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'link text',
        },
      },
      control: {
        type: 'text',
      },
    },
    showLink: {
      description: 'Whether to show the optional link beneath the content.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
    linkText: {
      description: 'The text for the optional link shown beneath the content.',
    },
    showIcon: {
      description: 'Whether the icon should display.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
    icon: {
      description: 'Custom icon to display.',
      options: lgIconsArray.map(icon => icon.name),
      control: {
        type: 'select',
      },
    },
    status: {
      options: statusTypes,
      description: 'Applies status treatment and ARIA role if applicable.',
      table: {
        type: {
          summary: statusTypes.join(' | '),
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
} as Meta<AlertStoryArgs>;

const basicTemplate = `
<lg-alert
  [showIcon]="showIcon"
  [status]="status"
  [role]="role"
>
  <p>{{ content }}</p>
  @if (showLink) {
    <a href="#">{{ linkText }}</a>
  }
</lg-alert>
`;

const richTextTemplate = `
<lg-alert
  [showIcon]="showIcon"
  [status]="status"
  [role]="role"
>
  @if (headingText && headingText !== '-') {
    <h3>{{ headingText }}</h3>
  }
  <p>
    @if (strongText && strongText !== '-') {
      <strong>{{ strongText }}</strong>
    }
    {{ content }}
    @if (inlineLinkText && inlineLinkText !== '-') {
      Here is some optional <a href="#">{{ inlineLinkText }}</a>.
    }
  </p>
  @if (showLink) {
    <a href="#">{{ linkText }}</a>
  }
</lg-alert>
`;

let previousStatus: Status | undefined;

const getResolvedIcon = (args: AlertStoryArgs, statusChanged: boolean) =>
  args.status === 'generic'
    ? statusChanged
      ? 'globe'
      : args.icon
    : args.status === 'info'
      ? statusChanged
        ? 'information-filled'
        : args.icon
      : undefined;

export const StandardAlert = {
  name: 'Inline message with basic content',
  render: (args: AlertStoryArgs) => {
    const statusChanged = args.status !== previousStatus;

    previousStatus = args.status;

    const resolvedIcon = getResolvedIcon(args, statusChanged);

    return {
      props: { ...args, resolvedIcon },
      template: `
      <lg-alert-story
        [content]="content"
        [headingText]="headingText"
        [inlineLinkText]="inlineLinkText"
        [showLink]="showLink"
        [linkText]="linkText"
        [strongText]="strongText"
        [showIcon]="showIcon"
        [icon]="resolvedIcon"
        [status]="status"
        [statusTheme]="statusTheme">
      </lg-alert-story>
    `,
    };
  },
  args: {
    content: 'This is a standard inline message.',
    headingText: '-',
    strongText: '-',
    inlineLinkText: '-',
    linkText: 'Read more',
    showLink: true,
    status: 'generic',
    statusTheme: 'neutral',
    showIcon: true,
    icon: 'globe',
  },
  argTypes: {
    headingText: {
      table: {
        disable: true,
      },
    },
    strongText: {
      table: {
        disable: true,
      },
    },
    inlineLinkText: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: basicTemplate,
      },
    },
    percy: {
      additionalSnapshots: [
        { suffix: ' [info]', args: { status: 'info' } },
        { suffix: ' [success]', args: { status: 'success' } },
        { suffix: ' [warning]', args: { status: 'warning' } },
        { suffix: ' [error]', args: { status: 'error' } },
        { suffix: ' [info-bold]', args: { status: 'info', statusTheme: 'bold' } },
        {
          suffix: ' [success-subtle]',
          args: { status: 'success', statusTheme: 'subtle' },
        },
      ],
    },
  },
};

export const RichTextExample = {
  name: 'Inline message with rich text',
  render: (args: AlertStoryArgs) => {
    const statusChanged = args.status !== previousStatus;

    previousStatus = args.status;

    const resolvedIcon = getResolvedIcon(args, statusChanged);

    return {
      props: { ...args, resolvedIcon },
      template: `
      <lg-alert-rich-text-story
        [content]="content"
        [headingText]="headingText"
        [inlineLinkText]="inlineLinkText"
        [linkText]="linkText"
        [showLink]="showLink"
        [strongText]="strongText"
        [showIcon]="showIcon"
        [icon]="resolvedIcon"
        [status]="status"
        [statusTheme]="statusTheme">
      </lg-alert-rich-text-story>
    `,
    };
  },
  args: {
    content: '-',
    headingText: 'Heading example',
    strongText: 'strong text example',
    inlineLinkText: 'link text',
    linkText: 'Read more',
    showLink: true,
    status: 'generic',
    statusTheme: 'neutral',
    showIcon: true,
    icon: 'globe',
  },
  parameters: {
    docs: {
      source: {
        code: richTextTemplate,
      },
    },
  },
};

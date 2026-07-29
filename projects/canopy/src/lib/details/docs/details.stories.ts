import { Meta, moduleMetadata } from '@storybook/angular';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { LgDetailsComponent } from '../details.component';
import { LgDetailsPanelHeadingComponent } from '../details-panel-heading/details-panel-heading.component';
import type { IconName } from '../../icon';
import type { Status } from '../../status';
// Direct import required for Webpack compatibility - do not use barrel file
import { lgIconsArray } from '../../ui-icons-files/set/lgIconsArray';

const statusTypes: Array<Status> = [ 'generic', 'info', 'success', 'warning', 'error' ];

interface DetailsStoryArgs {
  headingText: string;
  bodyText: string;
  headingLevel: number;
  showIcon: boolean;
  icon?: IconName;
  status: Status;
  isActive: boolean;
  isFocused: boolean;
}

const template = `
<lg-details
  [isActive]="isActive"
  [status]="status"
  [showIcon]="showIcon"
  [icon]="icon"
  (opened)="toggle('Detail opened')"
  (closed)="toggle('Detail closed')">
  <lg-details-panel-heading [headingLevel]="headingLevel">{{ headingText }}</lg-details-panel-heading>
  {{ bodyText }}
</lg-details>
`;

@Component({
  selector: 'lg-details-example',
  template: `<div #detailsContainer>${template}</div>`,
  imports: [ LgDetailsComponent, LgDetailsPanelHeadingComponent ],
})
class DetailsExampleComponent implements AfterViewInit, OnChanges {
  @ViewChild('detailsContainer') detailsContainer?: ElementRef<HTMLElement>;

  @Input() status: Status;
  @Input() statusTheme: string;
  @Input() headingLevel: number;
  @Input() headingText: string;
  @Input() bodyText: string;
  @Input() isActive: boolean;
  @Input() showIcon: boolean;
  @Input() icon?: IconName;
  @Input() isFocused = false;

  ngAfterViewInit(): void {
    queueMicrotask(() => this.applyFocusedState());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isFocused']) {
      queueMicrotask(() => this.applyFocusedState());
    }
  }

  private applyFocusedState(): void {
    const toggle = this.detailsContainer?.nativeElement.querySelector<HTMLButtonElement>(
      '.lg-details-panel-heading__toggle',
    );

    if (!toggle) {
      return;
    }

    if (this.isFocused) {
      toggle.focus();

      return;
    }

    if (document.activeElement === toggle) {
      toggle.blur();
    }
  }
}

let previousStatus: Status | undefined;

const getResolvedIcon = (args: DetailsStoryArgs, statusChanged: boolean) =>
  args.status === 'generic'
    ? statusChanged
      ? 'globe'
      : args.icon
    : args.status === 'info'
      ? statusChanged
        ? 'information-filled'
        : args.icon
      : undefined;

export default {
  title: 'Components/Details/Examples',
  tags: [ 'updated' ],
  component: LgDetailsComponent,
  decorators: [
    moduleMetadata({
      imports: [ DetailsExampleComponent ],
    }),
  ],
  argTypes: {
    toggle: {
      action: 'Toggle Item',
      table: {
        disable: true,
      },
    },
    showIcon: {
      description: 'Whether the status icon should display.',
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
      description:
        'Custom icon used for generic and info statuses only. Success, warning and error use fixed icons.',
      options: lgIconsArray.map(icon => icon.name),
      control: {
        type: 'select',
      },
      table: {
        type: {
          summary: 'IconName',
        },
      },
    },
    status: {
      options: statusTypes,
      description: 'Applies colour treatment and ARIA role if applicable.',
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
    headingLevel: {
      options: [ '1', '2', '3', '4', '5', '6' ],
      description:
        'The level of the details heading. This will change the tag but not the style.',
      table: {
        type: {
          summary: '1,2,3,4,5,6',
        },
      },
      control: {
        type: 'select',
      },
    },
    bodyText: {
      description: 'Body content displayed when expanded.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
    isActive: {
      description: 'Whether the details should be expanded.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    isFocused: {
      description:
        'Story-only focus toggle for demonstrating keyboard focus state on the heading button.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    closed: {
      table: {
        disable: true,
      },
    },
    opened: {
      table: {
        disable: true,
      },
    },
    _showIcon: {
      table: {
        disable: true,
      },
    },
    _icon: {
      table: {
        disable: true,
      },
    },
    _status: {
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

export const StandardDetails = {
  name: 'Details',
  render: (args: DetailsStoryArgs) => {
    const statusChanged = args.status !== previousStatus;

    previousStatus = args.status;

    const resolvedIcon = getResolvedIcon(args, statusChanged);

    return {
      props: { ...args, resolvedIcon },
      template: `<lg-details-example
        [status]="status"
        [headingLevel]="headingLevel"
        [headingText]="headingText"
        [bodyText]="bodyText"
        [isActive]="isActive"
        [showIcon]="showIcon"
        [icon]="resolvedIcon"
        [isFocused]="isFocused"
      ></lg-details-example>`,
    };
  },
  args: {
    status: 'generic',
    headingLevel: 5,
    headingText: 'How do I change my payment details?',
    bodyText:
      'Give us a call on 0800 123 4567 and we\'ll be happy to help you change your payment details.',
    isActive: false,
    showIcon: true,
    icon: 'globe',
    isFocused: false,
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
        { suffix: ' [focused]', args: { isFocused: true } },
      ],
    },
  },
};

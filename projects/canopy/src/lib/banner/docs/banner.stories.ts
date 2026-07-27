import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Meta } from '@storybook/angular';

import { LgBannerComponent } from '../banner.component';
import type { Status } from '../../status';
import { LgButtonComponent } from '../../button';
// Direct import required for Webpack compatibility - do not use barrel file
import { lgIconsArray } from '../../ui-icons-files/set/lgIconsArray';

const statuses: Array<Status> = [ 'generic', 'info', 'success', 'warning', 'error' ];

@Component({
  selector: 'lg-banner-story',
  template: `
    <lg-banner
      [status]="status"
      [statusTheme]="statusTheme"
      [showIcon]="showIcon"
      [icon]="resolvedIcon"
    >
      <p>
        {{ content }} Here is some <a href="#"> link text</a> or a
        <button lg-button priority="link">button link</button>.
      </p>
      @if (showLink) {
        <a href="#">{{ linkText }}</a>
      }
    </lg-banner>
  `,
  imports: [ LgBannerComponent, LgButtonComponent ],
})
class LgBannerStoryComponent implements OnChanges {
  @Input() content: string;
  @Input() linkText: string;
  @Input() showLink: boolean;
  @Input() status: Status;
  @Input() statusTheme: string;
  @Input() showIcon: boolean;
  @Input() icon: string | null;

  resolvedIcon: string | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['status']) {
      // Clear custom icon whenever status changes so the component default is shown
      this.resolvedIcon = null;

      return;
    }

    // Use icon input for both generic and info, defaulting as needed
    if (changes['icon']) {
      if (this.status === 'generic') {
        this.resolvedIcon = this.icon || 'globe';
      } else if (this.status === 'info') {
        this.resolvedIcon = this.icon || 'information-filled';
      } else {
        this.resolvedIcon = null;
      }
    }
  }
}

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Banner message/Examples',
  tags: [ 'updated' ],
  component: LgBannerComponent,
  argTypes: {
    content: {
      description: 'The projected content.',
    },
    linkText: {
      description: 'The text for the optional link shown beneath the content.',
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
      control: {
        type: 'boolean',
      },
    },
    status: {
      options: statuses,
      description: 'The status to apply to the banner.',
      table: {
        type: {
          summary: statuses.join(', '),
        },
        defaultValue: {
          summary: 'generic',
        },
      },
      control: {
        type: 'select',
      },
    },
    showIcon: {
      description: 'Whether the status icon is displayed.',
      control: {
        type: 'boolean',
      },
    },
    icon: {
      options: [ ...lgIconsArray.map(i => i.name) ],
      description:
        'Custom icon for generic or info status. Defaults to globe or information-filled.',
      table: {
        type: {
          summary: 'IconName',
        },
        defaultValue: {
          summary: 'globe',
        },
      },
      if: {
        arg: 'status',
        or: [ { eq: 'generic' }, { eq: 'info' } ],
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
    variant: {
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
<lg-banner
  [status]="status"
  [showIcon]="showIcon"
  [icon]="icon">
  {{ content }}
  @if (showLink) {
    <a href="#">{{ linkText }}</a>
  }
</lg-banner>
`;

export const StandardBanner = {
  name: 'Banner',
  render: (args: {
    content: string;
    linkText: string;
    showLink: boolean;
    status: Status;
    statusTheme: 'neutral';
    showIcon: boolean;
    icon: string | null;
  }) => ({
    props: { ...args },
    template: `
      <lg-banner-story
        [content]="content"
        [linkText]="linkText"
        [showLink]="showLink"
        [status]="status"
        [statusTheme]="statusTheme"
        [showIcon]="showIcon"
        [icon]="icon">
      </lg-banner-story>
    `,
    moduleMetadata: {
      imports: [ LgBannerStoryComponent ],
    },
  }),
  args: {
    content: 'This is a banner message.',
    linkText: 'Read more',
    showLink: true,
    status: 'generic',
    statusTheme: 'neutral',
    showIcon: true,
    icon: null,
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
    percy: {
      additionalSnapshots: [
        { suffix: ' [warning]', args: { status: 'warning' } },
        { suffix: ' [error]', args: { status: 'error' } },
        { suffix: ' [success]', args: { status: 'success' } },
        { suffix: ' [info]', args: { status: 'info' } },
      ],
    },
  },
};

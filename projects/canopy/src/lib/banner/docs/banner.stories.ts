import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata } from '@storybook/angular';

import { IconName, LgIconComponent } from '../../icon';
import { LgBannerComponent } from '../banner.component';
import type { Status } from '../../status';
// Direct import required for Webpack compatibility - do not use barrel file
import { lgIconsArray } from '../../ui-icons-files/set/lgIconsArray';

const statuses: Array<Status> = [ 'generic', 'info', 'success', 'warning', 'error' ];

@Component({
  selector: 'lg-banner-icon',
  template: `
    <lg-banner [status]="status" [statusTheme]="statusTheme">
      <lg-icon [name]="icon" />
      {{ content }} Here is some <a href="#"> link text</a>.
    </lg-banner>
  `,
  imports: [ LgBannerComponent, LgIconComponent ],
})
class LgBannerIconComponent {
  @Input() content: string;
  @Input() status: Status;
  @Input() statusTheme: string;
  @Input() icon: IconName;
}

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Banner message (WIP)/Examples',
  tags: [ 'pending' ],
  component: LgBannerComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgBannerIconComponent ],
    }),
  ],
  argTypes: {
    icon: {
      description: 'Icon to display',
      options: [ 'None', ...lgIconsArray.map(i => i.name) ],
      control: {
        type: 'select',
      },
    },
    content: {
      description: 'The projected content.',
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
<lg-banner [status]="status">
  <lg-icon [name]="icon"></lg-icon>
  {{content}}
</lg-banner>
`;

export const StandardBanner = {
  name: 'Banner',
  render: (args: LgBannerComponent) => ({
    props: args,
    template: `
      <lg-banner-icon
        [content]="content"
        [icon]="icon"
        [status]="status"
        [statusTheme]="statusTheme">
      </lg-banner-icon>
    `,
  }),
  args: {
    content: 'This is a banner message.',
    status: 'generic',
    statusTheme: 'neutral',
    icon: 'warning',
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

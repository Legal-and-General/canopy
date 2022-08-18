import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LgMoreLessBoxComponent, LgMoreLessBoxModule } from '../more-less-box';

import { notes } from './more-less-box.notes';

const demoTemplate = `
<lg-more-less-box
  [open]="open"
  [read]="read"
  [showReadIndicator]="showReadIndicator"
  (closed)="closed.emit()"
  (opened)="opened.emit()"
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet
    lobortis odio. Aenean egestas laoreet.
  </p>
  <lg-more-less-box-more-info>
    <p>
      Aenean efficitur dolor et ex congue pretium. Mauris nec suscipit purus.
      Fusce ornare risus sed magna vulputate, ut gravida elit sagittis. Duis
      laoreet, metus id sodales viverra, orci velit elementum est, vel ornare
      sapien ex ut purus. Donec pharetra tellus quis turpis consequat, quis
      condimentum tortor molestie.
    </p>
    <p>
      Nullam varius, odio in suscipit facilisis, lectus mauris posuere nisi,
      nec fermentum massa eros sed nibh. Nunc et interdum augue.
    </p>
  </lg-more-less-box-more-info>
</lg-more-less-box>
`;

@Component({
  selector: 'lg-more-less-box-story',
  template: demoTemplate,
})
class MoreLessBoxStoryComponent {
  @Input() open: boolean;
  @Input() read: boolean;
  @Input() showReadIndicator: boolean;

  @Output() closed = new EventEmitter<void>();
  @Output() opened = new EventEmitter<void>();
}

export default {
  title: 'Components/More Less Box',
  component: LgMoreLessBoxComponent,
  decorators: [
    moduleMetadata({
      declarations: [ MoreLessBoxStoryComponent ],
      imports: [ LgMoreLessBoxModule ],
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
    class: {
      table: {
        disable: true,
      },
    },
    closed: {
      action: 'Closed',
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    moreInfoId: {
      table: {
        disable: true,
      },
    },
    onToggleMoreLess: {
      table: {
        disable: true,
      },
    },
    open: {
      description: 'programmatically open or close the box.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    opened: {
      action: 'Opened',
      table: {
        disable: true,
      },
    },
    read: {
      description:
        'programmatically toggle the read indicator state between "TO READ" and "READ".',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    showReadIndicator: {
      description: 'toggle the display of the the "To READ" "READ" indicator.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} as Meta;

const template = `
  <lg-more-less-box-story
    [showReadIndicator]="showReadIndicator"
    [read]="read"
    [open]="open"
    (opened)="opened()"
    (closed)="closed()">
  </lg-more-less-box-story>
`;

const moreLessBoxStory: Story<LgMoreLessBoxComponent> = (
  args: LgMoreLessBoxComponent,
) => ({
  props: args,
  template,
});

export const moreLessBox = moreLessBoxStory.bind({});
moreLessBox.storyName = 'More Less Box';

moreLessBox.args = {
  open: false,
  read: false,
  showReadIndicator: true,
};

moreLessBox.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};

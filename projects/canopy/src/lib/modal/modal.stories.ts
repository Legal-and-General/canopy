import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgModalModule } from '../modal/modal.module';
import { LgButtonModule } from '../button';
import { LgMarginModule } from '../spacing';

import { LgSeparatorComponent } from '../separator/separator.component';
import { notes } from './modal.notes';
import { LgModalComponent } from './modal.component';

export default {
  title: 'Components/Modal',
  component: LgModalComponent,
  // TODO use subcomponents and define argTypes once this issue is resolved: https://github.com/storybookjs/storybook/issues/14710
  // subcomponents: { LgModalHeaderComponent,LgModalBodyComponent, LgModalBodyTimerComponent },
  decorators: [
    moduleMetadata({
      imports: [LgModalModule, LgButtonModule, LgMarginModule],
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
    headingLevel: {
      options: ['1', '2', '3', '4', '5', '6'],
      description: 'The level of the modal heading.',
      table: {
        type: {
          summary: ['1', '2', '3', '4', '5', '6'],
        },
      },
      control: {
        type: 'select',
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    isOpen: {
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
    ngOnInit: {
      table: {
        disable: true,
      },
    },
    onKeydown: {
      table: {
        disable: true,
      },
    },
    onModalClick: {
      table: {
        disable: true,
      },
    },
    onOverlayClick: {
      table: {
        disable: true,
      },
    },
    subscription: {
      table: {
        disable: true,
      },
    },
    modalBodyComponent: {
      table: {
        disable: true,
      },
    },
    modalHeaderComponent: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
<button lgModalTrigger="modal-story" lg-button type="button" variant="outline-primary">Open modal</button>
<lg-modal id="modal-story">
  <lg-modal-header [headingLevel]="headingLevel">Lorem ipsum</lg-modal-header>
  <lg-modal-body>
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <lg-modal-body-timer timer="90"></lg-modal-body-timer>
  </lg-modal-body>
  <lg-modal-footer>
    <lg-button-group>
      <button lg-button lgMarginBottom="none" variant="solid-primary" type="button">Button</button>
      <button lg-button lgMarginBottom="none" variant="outline-primary" type="button">Close</button>
    </lg-button-group>
  </lg-modal-footer>
</lg-modal>
`;

const detailsTemplate: Story<LgSeparatorComponent> = (args: LgSeparatorComponent) => ({
  props: args,
  template,
});

export const standardSeparator = detailsTemplate.bind({});
standardSeparator.storyName = 'Standard';
standardSeparator.args = {
  headingLevel: 2,
};
standardSeparator.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};

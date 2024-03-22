import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { Component } from '@angular/core';

import { LgModalComponent } from '../modal.component';
import { LgModalTriggerDirective } from '../modal-trigger/modal-trigger.directive';
import { LgModalHeaderComponent } from '../modal-header/modal-header.component';
import { LgModalBodyComponent } from '../modal-body/modal-body.component';
import { LgModalFooterComponent } from '../modal-footer/modal-footer.component';
import { LgModalBodyTimerComponent } from '../modal-body-timer/modal-body-timer.component';
import { lgIconClose, LgIconRegistry } from '../../icon';
import { LgButtonComponent, LgButtonGroupComponent } from '../../button';

const template = `
<button lgModalTrigger="modal-story" lg-button type="button" variant="secondary-dark">Open modal</button>
<lg-modal id="modal-story">
  <lg-modal-header [headingLevel]="headingLevel">Lorem ipsum</lg-modal-header>
  <lg-modal-body>
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <lg-modal-body-timer timer="90"></lg-modal-body-timer>
  </lg-modal-body>
  <lg-modal-footer>
    <lg-button-group>
      <button lg-button lgMarginBottom="none" variant="primary-dark" type="button">Button</button>
      <button lg-button lgMarginBottom="none" variant="secondary-dark" type="button">Close</button>
    </lg-button-group>
  </lg-modal-footer>
</lg-modal>
`;

@Component({
  selector: 'lg-modal-wrapper',
  template,
  standalone: true,
  imports: [
    LgModalComponent,
    LgModalTriggerDirective,
    LgModalHeaderComponent,
    LgModalBodyComponent,
    LgModalFooterComponent,
    LgModalBodyTimerComponent,
    LgButtonComponent,
    LgButtonGroupComponent,
  ],
})
class ModalWrapperComponent {
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([ lgIconClose ]);
  }
}

export default {
  title: 'Components/Modal/Examples',
  // TODO use subcomponents and define argTypes once this issue is resolved: https://github.com/storybookjs/storybook/issues/14710
  // subcomponents: { LgModalHeaderComponent,LgModalBodyComponent, LgModalBodyTimerComponent },
  decorators: [
    moduleMetadata({
      imports: [ ModalWrapperComponent ],
    }),
  ],
  argTypes: {
    headingLevel: {
      options: [ '1', '2', '3', '4', '5', '6' ],
      description: 'The level of the modal heading.',
      table: {
        type: {
          summary: [ '1', '2', '3', '4', '5', '6' ],
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
    closed: {
      table: {
        disable: true,
      },
    },
    closedOverlayClick: {
      table: {
        disable: true,
      },
    },
    closedEscKey: {
      table: {
        disable: true,
      },
    },
    open: {
      table: {
        disable: true,
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

const detailsTemplate: StoryFn<ModalWrapperComponent> = (
  args: ModalWrapperComponent,
) => ({
  props: args,
  template: '<lg-modal-wrapper></lg-modal-wrapper>',
});

export const standardSeparator = detailsTemplate.bind({});
standardSeparator.storyName = 'Modal';

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

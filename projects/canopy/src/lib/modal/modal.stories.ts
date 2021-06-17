import { select, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgModalModule } from '../modal/modal.module';
import { notes } from './modal.notes';
import { LgButtonModule } from '../button';
import { LgMarginModule } from '../spacing';

export default {
  title: 'Components/Modal',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgModalModule, LgButtonModule, LgMarginModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
    <button lgModalTrigger="modal-story" lg-button type="button" variant="outline-primary">Open modal</button>
    <lg-modal id="modal-story">
      <lg-modal-header [headingLevel]="headingLevel">Lorem ipsum</lg-modal-header>
      <lg-modal-body>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <lg-modal-body-timer timer="0:25"></lg-modal-body-timer>
      </lg-modal-body>
      <lg-modal-footer>
        <lg-button-group>
          <button lg-button lgMarginBottom="none" variant="solid-primary" type="button">Button</button>
          <button lg-button lgMarginBottom="none" variant="outline-primary" type="button">Close</button>
        </lg-button-group>
      </lg-modal-footer>
    </lg-modal>
  `,
  props: {
    headingLevel: select('heading level', [1, 2, 3, 4, 5, 6], 2),
  },
});

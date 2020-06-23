import { CommonModule } from '@angular/common';
import { select, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgButtonModule } from '../button';
import { LgAccordionModule } from './accordion.module';
import { notes } from './accordion.notes';

export default {
  title: 'Components/Accordion',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [CommonModule, LgAccordionModule, LgButtonModule]
      })
    ],
    'in-dsm': {
      id: '5ec4dbf0c4b3aed7e94e8886'
    },
    notes: {
      markdown: notes
    }
  }
};

export const standard = () => ({
  template: `
    <lg-accordion [headingLevel]="headingLevel">
      <lg-accordion-item>
        <lg-accordion-panel-heading [headingLevel]="headingLevel">Item 1</lg-accordion-panel-heading>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p>
      </lg-accordion-item>
      <lg-accordion-item>
        <lg-accordion-panel-heading [headingLevel]="headingLevel">Item 2</lg-accordion-panel-heading>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.</p>
        <button lg-button lgMarginTop="sm" variant="solid-primary">
          Test primary button
        </button>
      </lg-accordion-item>
    </lg-accordion>
  `,
  props: {
    headingLevel: select('headingLevel', [1, 2, 3, 4, 5, 6], 2)
  }
});

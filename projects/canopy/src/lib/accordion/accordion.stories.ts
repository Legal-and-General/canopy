import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
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
        imports: [CommonModule, LgAccordionModule, LgButtonModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

const accordionItems = `
<lg-accordion-item [isActive]="itemOneActive"
                   (opened)="toggle('Item 1 opened')"
                   (closed)="toggle('Item 1 closed')">
  <lg-accordion-panel-heading [headingLevel]="headingLevel">Item 1</lg-accordion-panel-heading>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.</p>
</lg-accordion-item>
<lg-accordion-item [isActive]="itemTwoActive"
                   (opened)="toggle('Item 3 opened')"
                   (closed)="toggle('Item 2 closed')">
  <lg-accordion-panel-heading [headingLevel]="headingLevel">Item 2</lg-accordion-panel-heading>

  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    <a href="#">reprehenderit</a> in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur.</p>
  <button lg-button lgMarginTop="sm" variant="solid-primary">
    Test primary button
  </button>
</lg-accordion-item>
<lg-accordion-item [isActive]="itemThreeActive">
  <lg-accordion-panel-heading [headingLevel]="headingLevel">Item 3 is Lazy</lg-accordion-panel-heading>

  <ng-template lgAccordionItemContent>
    <p>This panel content is only initialised when opened</p>
  </ng-template>
</lg-accordion-item>
`;

function props() {
  return {
    headingLevel: select('headingLevel', [1, 2, 3, 4, 5, 6], 2),
    toggle: action('Toggle item'),
    itemOneActive: boolean('Item 1 active', false),
    itemTwoActive: boolean('Item 2 active', true),
    itemThreeActive: boolean('Item 3 active', false),
  };
}

export const standard = () => ({
  template: `<lg-accordion [headingLevel]="headingLevel">${accordionItems}</lg-accordion>`,
  props: props(),
});

export const singleItemActive = () => ({
  template: `<lg-accordion [headingLevel]="headingLevel" [multi]="false">${accordionItems}</lg-accordion>`,
  props: props(),
});

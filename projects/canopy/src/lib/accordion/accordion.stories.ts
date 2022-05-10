import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular';

import { LgButtonModule } from '../button';

import { LgAccordionModule } from './accordion.module';
import { notes } from './accordion.notes';
import { LgAccordionComponent } from './accordion.component';

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Accordion',
  component: LgAccordionComponent,
  decorators: [
    moduleMetadata({
      imports: [ CommonModule, LgAccordionModule, LgButtonModule ],
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
    toggle: {
      action: 'Toggle Item',
      table: {
        disable: true,
      },
    },
    multi: {
      description: 'Set false to only allow a single panel to be open at a time.',
    },
    headingLevel: {
      options: [ '1', '2', '3', '4', '5', '6' ],
      description: 'The heading level of the accordion panel heading.',
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
    class: {
      table: {
        disable: true,
      },
    },
    ngAfterContentInit: {
      table: {
        disable: true,
      },
    },
    panelHeadings: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const accordionItems = `
<lg-accordion-item [isActive]="itemOneActive"
                   (opened)="toggle('Item 1 opened')"
                   (closed)="toggle('Item 1 closed')">
  <lg-accordion-panel-heading>Item 1</lg-accordion-panel-heading>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.</p>
</lg-accordion-item>
<lg-accordion-item [isActive]="itemTwoActive"
                   (opened)="toggle('Item 3 opened')"
                   (closed)="toggle('Item 2 closed')">
  <lg-accordion-panel-heading>Item 2</lg-accordion-panel-heading>

  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    <a href="#">reprehenderit</a> in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur.</p>
  <button lg-button lgMarginTop="sm" variant="primary-dark">
    Test primary button
  </button>
</lg-accordion-item>
<lg-accordion-item [isActive]="itemThreeActive">
  <lg-accordion-panel-heading>Item 3 is Lazy</lg-accordion-panel-heading>

  <ng-template lgAccordionItemContent>
    <p>This panel content is only initialised when opened</p>
  </ng-template>
</lg-accordion-item>
`;

const standardTemplate = `<lg-accordion [headingLevel]="headingLevel" [multi]=multi>${accordionItems}</lg-accordion>`;

const accordionTemplate: Story<LgAccordionComponent> = (args: LgAccordionComponent) => ({
  props: args,
  template: standardTemplate,
});

export const standardAccordion = accordionTemplate.bind({});
standardAccordion.storyName = 'Accordion';

standardAccordion.args = {
  headingLevel: 2,
  itemOneActive: false,
  itemTwoActive: true,
  itemThreeActive: false,
  multi: false,
};

standardAccordion.parameters = {
  docs: {
    source: {
      code: standardTemplate,
    },
  },
};

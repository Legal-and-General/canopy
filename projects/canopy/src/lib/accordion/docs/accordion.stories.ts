import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { Component, Input } from '@angular/core';

import { LgAccordionComponent } from '../accordion.component';
import { LgAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { LgAccordionItemContentDirective } from '../accordion-item/accordion-item-content.directive';
import { LgAccordionPanelHeadingComponent } from '../accordion-panel-heading/accordion-panel-heading.component';
import { LgButtonComponent } from '../../button';
import { LgMarginDirective } from '../../spacing';
import {
  lgIconNews,
  lgIconNotes,
  lgIconIdea,
  LgIconRegistry,
  LgIconComponent,
} from '../../icon';

const accordionItems = `
<lg-accordion-item [isActive]="itemOneActive"
                   (opened)="toggle('Item 1 opened')"
                   (closed)="toggle('Item 1 closed')">
  <lg-accordion-panel-heading><lg-icon *ngIf="iconForFirstAccordionItem" [name]="iconForFirstAccordionItem"></lg-icon>Item 1</lg-accordion-panel-heading>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.</p>
</lg-accordion-item>
<lg-accordion-item [isActive]="itemTwoActive"
                   (opened)="toggle('Item 3 opened')"
                   (closed)="toggle('Item 2 closed')">
  <lg-accordion-panel-heading><lg-icon *ngIf="iconForSecondAccordionItem" [name]="iconForSecondAccordionItem"></lg-icon>Item 2</lg-accordion-panel-heading>

  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    <a href="#">reprehenderit</a> in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur.</p>
  <button lg-button lgMarginTop="sm" variant="primary-dark">
    Test primary button
  </button>
</lg-accordion-item>
<lg-accordion-item [isActive]="itemThreeActive">
  <lg-accordion-panel-heading><lg-icon *ngIf="iconForThirdAccordionItem" [name]="iconForThirdAccordionItem"></lg-icon>Item 3 is Lazy</lg-accordion-panel-heading>

  <ng-template lgAccordionItemContent>
    <p>This panel content is only initialised when opened</p>
  </ng-template>
</lg-accordion-item>
`;

const standardTemplate = `<lg-accordion [headingLevel]="headingLevel" [multi]=multi>${accordionItems}</lg-accordion>`;

@Component({
  selector: 'lg-accordion-with-icons-wrapper',
  template: standardTemplate,
  styles: [
    `
      :host {
        display: block;
        padding: var(--space-sm);
      }
    `,
  ],
})
class AccordionWrapperComponent {
  @Input() iconForFirstAccordionItem = '';
  @Input() iconForSecondAccordionItem = '';
  @Input() iconForThirdAccordionItem = '';
  @Input() headingLevel = 2;
  @Input() itemOneActive = false;
  @Input() itemTwoActive = true;
  @Input() itemThreeActive = false;
  @Input() multi = false;
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([ lgIconNotes, lgIconNews, lgIconIdea ]);
  }
}

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Accordion/Examples',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        LgAccordionComponent,
        LgAccordionItemComponent,
        LgAccordionItemContentDirective,
        LgAccordionPanelHeadingComponent,
        LgButtonComponent,
        LgMarginDirective,
        LgIconComponent
      ],
      declarations: [ AccordionWrapperComponent ],
    }),
  ],
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
      description:
        'The heading level of the accordion panel heading. This will change the tag but not the style.',
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

const standardAccordionTemplate: StoryFn<AccordionWrapperComponent> = (
  args: AccordionWrapperComponent,
) => ({
  props: args,
  template: `
        <lg-accordion-with-icons-wrapper
        [headingLevel]="headingLevel"
        [itemOneActive]="itemOneActive"
        [itemTwoActive]="itemTwoActive"
        [itemThreeActive]="itemThreeActive"
        [multi]="multi"
        >
      </lg-accordion-with-icons-wrapper>
  `,
});

export const standardAccordion = standardAccordionTemplate.bind({});
standardAccordion.storyName = 'Accordion';

standardAccordion.args = {
  headingLevel: 2,
  itemOneActive: false,
  itemTwoActive: true,
  itemThreeActive: false,
  multi: false,
};

const accordionWithIconsTemplate: StoryFn<AccordionWrapperComponent> = (
  args: AccordionWrapperComponent,
) => ({
  props: args,
  template: `<lg-accordion-with-icons-wrapper
                [headingLevel]="headingLevel"
                [itemOneActive]="itemOneActive"
                [itemTwoActive]="itemTwoActive"
                [itemThreeActive]="itemThreeActive"
                [iconForFirstAccordionItem]="iconForFirstAccordionItem"
                [iconForSecondAccordionItem]="iconForSecondAccordionItem"
                [iconForThirdAccordionItem]="iconForThirdAccordionItem"
                [multi]="multi"
              >
            </lg-accordion-with-icons-wrapper>`,
});

export const accordionWithIcons = accordionWithIconsTemplate.bind({});

accordionWithIcons.storyName = 'Accordion with Icons';

accordionWithIcons.args = {
  iconForFirstAccordionItem: 'notes',
  iconForSecondAccordionItem: 'news',
  iconForThirdAccordionItem: 'idea',
  headingLevel: 2,
  itemOneActive: false,
  itemTwoActive: true,
  itemThreeActive: false,
  multi: false,
};

accordionWithIcons.argTypes = {
  iconForFirstAccordionItem: {
    options: [ 'news', 'notes', 'idea' ],
    description:
      'The icon to display in the left side of the heading of the first accordion item.',
    control: {
      type: 'select',
    },
  },
  iconForSecondAccordionItem: {
    options: [ 'news', 'notes', 'idea' ],
    description:
      'The icon to display in the left side of the heading of the second accordion item.',
    control: {
      type: 'select',
    },
  },
  iconForThirdAccordionItem: {
    options: [ 'news', 'notes', 'idea' ],
    description:
      'The icon to display in the left side of the heading of the third accordion item.',
    control: {
      type: 'select',
    },
  },
};

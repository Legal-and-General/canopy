import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata } from '@storybook/angular';
import { action } from 'storybook/actions';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';

import { LgAccordionComponent } from '../accordion.component';
import { LgAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { LgAccordionItemContentDirective } from '../accordion-item/accordion-item-content.directive';
import { LgAccordionPanelHeadingComponent } from '../accordion-panel-heading/accordion-panel-heading.component';
import { LgButtonComponent } from '../../button';
import { LgMarginDirective } from '../../spacing';
import { LgIconComponent } from '../../icon';
import { LgColourDirective } from '../../colour';
import type { Colour, ColourTheme } from '../../colour/colour.interface';
import {
  LgContentAreaComponent,
  LgContentAreaContentComponent,
  LgContentAreaHeaderComponent,
  LgContentAreaTitleComponent,
} from '../../content-area';

const accordionItems = `
<lg-accordion-item [isActive]="itemOneActive"
                   (opened)="itemToggled.emit('Item 1 opened')"
                   (closed)="itemToggled.emit('Item 1 closed')">
  <lg-accordion-panel-heading>
    @if (iconForFirstAccordionItem) {
      <lg-icon [name]="iconForFirstAccordionItem"></lg-icon>
    }
    Item 1
    @if (showHeaderActions) {
      <div lgAccordionHeadingActions>
        <a lg-button priority="link" [backIcon]="true" href="#favourite">
          <lg-icon name="star-outline" />
          Favourite
        </a>
        <a lg-button priority="link" [backIcon]="true" href="#delete">
          <lg-icon name="trash" />
          Delete
        </a>
      </div>
    }
  </lg-accordion-panel-heading>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.</p>
</lg-accordion-item>
<lg-accordion-item [isActive]="itemTwoActive"
                   (opened)="itemToggled.emit('Item 2 opened')"
                   (closed)="itemToggled.emit('Item 2 closed')">
  <lg-accordion-panel-heading>
    @if (iconForSecondAccordionItem) {
      <lg-icon [name]="iconForSecondAccordionItem"></lg-icon>
    }
    {{ itemTwoTitle }}
  </lg-accordion-panel-heading>

  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    <a href="#">reprehenderit</a> in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur.</p>
  <button lg-button lgMarginTop="4" priority="primary">
    Test primary button
  </button>
</lg-accordion-item>
<lg-accordion-item [isActive]="itemThreeActive">
  <lg-accordion-panel-heading>
    @if (iconForThirdAccordionItem) {
      <lg-icon [name]="iconForThirdAccordionItem"></lg-icon>
    }
    Item 3 is Lazy
  </lg-accordion-panel-heading>

  <ng-template lgAccordionItemContent>
    <p>This panel content is only initialised when opened</p>
  </ng-template>
</lg-accordion-item>
`;

const standardTemplate = `
@if (showExpandCollapseAll) {
  <button lg-button type="button" priority="secondary" (click)="toggleAll()">
    {{ allExpanded ? 'Collapse all' : 'Expand all' }}
    <lg-icon [name]="allExpanded ? 'minus' : 'add'" />
  </button>
}
<lg-accordion [headingLevel]="headingLevel" [multi]="multi || showExpandCollapseAll">
  ${accordionItems}
</lg-accordion>
`;

@Component({
  selector: 'lg-accordion-with-icons-wrapper',
  template: standardTemplate,
  styles: [
    `
      :host {
        display: block;
        padding: var(--space-4);
      }
    `,
  ],
  standalone: false,
})
class AccordionWrapperComponent {
  @Input() iconForFirstAccordionItem = '';
  @Input() iconForSecondAccordionItem = '';
  @Input() iconForThirdAccordionItem = '';
  @Input() itemTwoTitle = 'Item 2';
  @Input() showHeaderActions = false;
  @Input() showExpandCollapseAll = false;
  @Input() headingLevel = 2;
  @Input() itemOneActive = false;
  @Input() itemTwoActive = true;
  @Input() itemThreeActive = false;
  @Input() multi = false;
  @Output() itemToggled = new EventEmitter<string>();

  @ViewChildren(LgAccordionPanelHeadingComponent)
  panelHeadings: QueryList<LgAccordionPanelHeadingComponent>;

  get allExpanded(): boolean {
    return (
      !!this.panelHeadings?.length &&
      this.panelHeadings.toArray().every(heading => heading.isActive)
    );
  }

  toggleAll(): void {
    const expand = !this.allExpanded;

    this.panelHeadings.forEach(heading => {
      if (heading.isActive !== expand) {
        heading.toggle();
      }
    });
  }
}

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Accordion/Examples',
  tags: [ 'pending' ],
  args: {
    toggle: action('Toggle Item'),
  },
  parameters: {
    backgrounds: { disable: true },
  },
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
        LgIconComponent,
        LgColourDirective,
        LgContentAreaComponent,
        LgContentAreaContentComponent,
        LgContentAreaHeaderComponent,
        LgContentAreaTitleComponent,
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
      control: false,
      table: {
        disable: true,
      },
    },
    headingLevel: {
      options: [ '1', '2', '3', '4', '5', '6' ],
      description:
        'The heading level of the accordion panel heading. This will change the tag but not the style.',
      table: {
        type: {
          summary: '1,2,3,4,5,6',
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

export const StandardAccordion = {
  name: 'Accordion',
  render: (args: AccordionWrapperComponent) => ({
    props: args,
    template: `
      <lg-accordion-with-icons-wrapper
        [headingLevel]="headingLevel"
        [itemOneActive]="itemOneActive"
        [itemTwoActive]="itemTwoActive"
        [itemThreeActive]="itemThreeActive"
        [multi]="multi"
        (itemToggled)="toggle($event)"
        >
      </lg-accordion-with-icons-wrapper>
    `,
  }),
  args: {
    headingLevel: 2,
    itemOneActive: false,
    itemTwoActive: true,
    itemThreeActive: false,
    multi: false,
  },
};

const contentAreaTemplate = `
<lg-content-area [lgColour]="mode" [lgColourTheme]="theme">
  <lg-content-area-header>
    <lg-content-area-title [headingLevel]="2">
      Accordion in content area
    </lg-content-area-title>
  </lg-content-area-header>
  <lg-content-area-content>
    <lg-accordion-with-icons-wrapper
      [headingLevel]="headingLevel"
      [itemOneActive]="itemOneActive"
      [itemTwoActive]="itemTwoActive"
      [itemThreeActive]="itemThreeActive"
      [iconForFirstAccordionItem]="iconForFirstAccordionItem"
      [iconForSecondAccordionItem]="iconForSecondAccordionItem"
      [iconForThirdAccordionItem]="iconForThirdAccordionItem"
      [itemTwoTitle]="itemTwoTitle"
      [showHeaderActions]="showHeaderActions"
      [showExpandCollapseAll]="showExpandCollapseAll"
      [multi]="multi"
      (itemToggled)="toggle($event)">
    </lg-accordion-with-icons-wrapper>
  </lg-content-area-content>
</lg-content-area>
`;

export const AccordionInContentArea = {
  name: 'Accordion in content area',
  render: (args: AccordionWrapperComponent & { mode: Colour; theme: ColourTheme }) => ({
    props: args,
    template: contentAreaTemplate,
  }),
  args: {
    ...StandardAccordion.args,
    headingLevel: 3,
    showHeaderActions: true,
    showExpandCollapseAll: true,
    multi: true,
    itemTwoTitle:
      'An In-Depth Exploration of the Fascinating World of the Second Accordion: Unveiling Its History, Mechanics, and Cultural Significance in Modern Music',
    iconForFirstAccordionItem: 'notes',
    iconForSecondAccordionItem: 'news',
    iconForThirdAccordionItem: 'light-bulb',
    mode: 'blue',
    theme: 'neutral-inverse',
  },
  argTypes: {
    mode: {
      options: [ 'blue', 'green', 'red', 'yellow' ],
      control: { type: 'select' },
      description: 'The colour mode applied to the content area.',
    },
    theme: {
      options: [ 'neutral', 'neutral-inverse', 'subtle', 'bold' ],
      control: { type: 'select' },
      description: 'The theme applied to the content area colour mode.',
    },
  },
  parameters: {
    docs: {
      source: {
        code: contentAreaTemplate,
      },
    },
  },
};

export const AccordionWithIcons = {
  name: 'Accordion with Icons',
  render: (args: AccordionWrapperComponent) => ({
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
        (itemToggled)="toggle($event)"
      >
    </lg-accordion-with-icons-wrapper>`,
  }),
  args: {
    iconForFirstAccordionItem: 'globe',
    iconForSecondAccordionItem: 'globe',
    iconForThirdAccordionItem: 'globe',
    headingLevel: 2,
    itemOneActive: false,
    itemTwoActive: true,
    itemThreeActive: false,
    multi: false,
  },
  argTypes: {
    iconForFirstAccordionItem: {
      options: [ 'globe', 'notes', 'light-bulb' ],
      description:
        'The icon to display in the left side of the heading of the first accordion item.',
      control: {
        type: 'select',
      },
    },
    iconForSecondAccordionItem: {
      options: [ 'globe', 'notes', 'light-bulb' ],
      description:
        'The icon to display in the left side of the heading of the second accordion item.',
      control: {
        type: 'select',
      },
    },
    iconForThirdAccordionItem: {
      options: [ 'globe', 'notes', 'light-bulb' ],
      description:
        'The icon to display in the left side of the heading of the third accordion item.',
      control: {
        type: 'select',
      },
    },
  },
};

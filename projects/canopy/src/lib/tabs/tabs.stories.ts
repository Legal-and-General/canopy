import { action } from '@storybook/addon-actions';
import { object, select, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgMarginModule } from '../spacing';
import { LgTabsModule } from './tabs.module';
import { notes } from './tabs.notes';

export default {
  title: 'Components/Tabs',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgTabsModule, LgMarginModule],
      }),
    ],
    'in-dsm': {
      id: '5ec50da107ffe67b65c12ef7',
    },
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
  <lg-tabs [headingLevel]="headingLevel"
    label="Annuities"
    (tabEvent)="tabEvent($event)"
    [lgMarginTop]="'xxs'"
    [lgMarginRight]="'none'"
    [lgMarginBottom]="'none'"
    [lgMarginLeft]="'none'"
  >
    <lg-tab-item *ngFor="let tab of tabs">
      <lg-tab-item-heading>{{ tab.header }}</lg-tab-item-heading>
      <lg-tab-item-content>
        <div class="lg-tabs__content-section">{{ tab.content }}</div>
      </lg-tab-item-content>
    </lg-tab-item>
  </lg-tabs>
  `,
  props: {
    tabs: object('Tabs', getDefultTabsContent()),
    headingLevel: select('headingLevel', [1, 2, 3, 4, 5, 6], 2),
    tabEvent: action('tab selected'),
  },
});

interface TabStoryItem {
  header: string;
  content: string;
}

function getDefultTabsContent(): Array<TabStoryItem> {
  return [
    {
      header: 'Product details',
      content:
        'You have a standard lifetime annuity. We will pay you a guaranteed income for life',
    },
    {
      header: 'Payments and tax',
      content: 'Your last payment was £230.20 after tax and deductions',
    },
    {
      header: 'Death and benefits',
      content:
        'You have selected a single life policy with no continuation benefits',
    },
    {
      header: 'Documents',
      content: 'Your documents are available in multiple formats',
    },
  ];
}

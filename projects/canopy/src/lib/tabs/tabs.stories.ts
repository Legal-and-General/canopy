import { action } from '@storybook/addon-actions';
import { object, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { CanopyModule } from '../canopy.module';
import { notes } from './tabs.notes';

const stories = storiesOf('Components', module).addDecorator(withKnobs);

interface TabStoryItem {
  header: string;
  content: string;
}
stories.add(
  'Tabs',
  () => {
    require('!style-loader!css-loader!sass-loader!./../../../../../.storybook/full-screen.css');

    return {
      moduleMetadata: {
        imports: [CanopyModule]
      },
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
        tabEvent: action('tab selected')
      }
    };
  },
  {
    notes: {
      markdown: notes
    }
  }
);

function getDefultTabsContent(): TabStoryItem[] {
  return [
    {
      header: 'Product details',
      content:
        'You have a standard lifetime annuity. We will pay you a guaranteed income for life'
    },
    {
      header: 'Payments and tax',
      content: 'Your last payment was £230.20 after tax and deductions'
    },
    {
      header: 'Death and benefits',
      content:
        'You have selected a single life policy with no continuation benefits'
    },
    {
      header: 'Documents',
      content: 'Your documents are available in multiple formats'
    }
  ];
}

import { moduleMetadata, Story } from '@storybook/angular';

import { LgMarginModule } from '../../spacing';
import { LgTabsModule } from '../tabs.module';

export default {
  title: 'Components/Tabs/Examples',
  decorators: [
    moduleMetadata({
      imports: [ LgTabsModule, LgMarginModule ],
    }),
  ],
  parameters: {
    viewMode: 'story',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  argTypes: {
    tabEvent: {
      action: 'Tab click',
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    selectedTabNavIndex: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    isKeyboardEvent: {
      table: {
        disable: true,
      },
    },
    selectedIndex: {
      table: {
        disable: true,
      },
    },
    blur: {
      table: {
        disable: true,
      },
    },
    keyboardNavigation: {
      table: {
        disable: true,
      },
    },
    navigateToTab: {
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
    setTabs: {
      table: {
        disable: true,
      },
    },
    tabQueryList: {
      table: {
        disable: true,
      },
    },
  },
};

const template = `
<lg-tabs
  label="Annuities"
  (tabEvent)="tabEvent($event)"
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
`;

const standardTabsStory: Story<LgTabsModule> = (args: LgTabsModule) => ({
  props: args,
  template,
});

export const standardTabs = standardTabsStory.bind({});
standardTabs.storyName = 'Tabbed content';

standardTabs.args = {
  tabs: getDefaultTabsContent(),
};

standardTabs.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};

interface TabStoryItem {
  header: string;
  content: string;
}

function getDefaultTabsContent(): Array<TabStoryItem> {
  return [
    {
      header: 'Tab 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere nec leo nec hendrerit. Pellentesque eu lacinia tortor. Donec urna felis, dictum et faucibus et, interdum ut urna. Nam eleifend eleifend mi vel blandit. Morbi rutrum a odio in pharetra. Quisque vitae lacus efficitur, elementum mauris in, porta nisl. Praesent porttitor accumsan ante, sed efficitur nunc placerat in. Etiam non lorem leo. Aenean magna lacus, iaculis at velit non, congue commodo dui. Pellentesque tempus elementum tempor.',
    },
    {
      header: 'Tab 2',
      content:
        'Maecenas laoreet tristique ligula, mollis ullamcorper est faucibus eget. Aenean quis placerat arcu. Sed efficitur odio nunc, id facilisis orci accumsan eget. Nunc feugiat elit eget imperdiet faucibus. Maecenas faucibus sit amet nisi a ultricies. Donec id scelerisque ante, eget tempus dui. Fusce semper ex eu lorem pellentesque tristique. Proin non augue quis orci lobortis rhoncus. Aliquam quis luctus ipsum. Maecenas vulputate porta mauris, id lacinia turpis feugiat sed. Aenean et commodo elit, a dignissim massa. Fusce facilisis laoreet orci quis vehicula. Curabitur eu lacus vitae libero laoreet hendrerit at quis magna.',
    },
    {
      header: 'Tab 3',
      content:
        'Phasellus enim sem, dignissim nec ullamcorper id, euismod in magna. Sed at egestas urna. Donec at nibh eros. Pellentesque at nunc in elit egestas pellentesque a quis nunc. Praesent commodo risus in metus tincidunt pretium. Nulla vehicula sem lectus, ac eleifend velit pellentesque a. Proin et varius ante, nec venenatis nulla. Pellentesque pharetra risus lorem, et congue ligula interdum volutpat. Donec ut iaculis metus. Nunc rutrum vestibulum ex nec condimentum. Pellentesque nec volutpat quam. Etiam tortor arcu, eleifend ut ante id, ullamcorper tristique libero. Praesent imperdiet, orci in tincidunt aliquet, quam sapien convallis nunc, non maximus dui lacus sed lacus. Suspendisse ut tortor dui.',
    },
    {
      header: 'Tab 4',
      content:
        'Pellentesque finibus ac libero ac rutrum. Morbi faucibus, dui et efficitur posuere, urna ipsum vehicula dui, in placerat risus felis et lectus. Vivamus imperdiet nulla nisi, eget varius mi cursus nec. Suspendisse quis risus eleifend, pretium lectus eget, condimentum leo. Aliquam faucibus at mi sit amet volutpat. Nunc nec orci sapien. Duis augue quam, bibendum in enim a, ultricies luctus mi. Aliquam eleifend magna est, eget sagittis massa malesuada quis. Maecenas mattis tortor sit amet mi sagittis, vitae aliquam dui rhoncus. Aenean sed erat eu ante ornare sollicitudin in et est.',
    },
  ];
}

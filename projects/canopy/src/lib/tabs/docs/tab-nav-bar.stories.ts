import { moduleMetadata, StoryFn } from '@storybook/angular';

import { LgMarginModule } from '../../spacing';
import { LgTabsModule } from '../tabs.module';
import { LgTabsComponent } from '../tabs.component';

export default {
  title: 'Components/Tabs/Examples',
  component: LgTabsComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgTabsModule, LgMarginModule ],
    }),
  ],
  argTypes: {
    onClick: {
      action: 'Tab nav link click',
      table: {
        disable: true,
      },
    },
    tabEvent: {
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

function getTemplate(preventDefault?: boolean) {
  return `
<lg-tab-nav-bar label="Tabbed navigation demo">
  <a *ngFor="let tab of tabs; index as i" lgTabNavBarLink href="" (click)="${
  preventDefault
    ? '$event.preventDefault();'
    : ''
}onClick($event)" id="tabbed-nav-{{i}}" [isActive]="i === selectedTabNavIndex">{{tab}}</a>
</lg-tab-nav-bar>

<lg-tab-nav-content [selectedTabId]="'tabbed-nav-' + selectedTabNavIndex">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere nec leo nec hendrerit. Pellentesque eu lacinia tortor. Donec urna felis, dictum et faucibus et, interdum ut urna. Nam eleifend eleifend mi vel blandit. Morbi rutrum a odio in pharetra. Quisque vitae lacus efficitur, elementum mauris in, porta nisl. Praesent porttitor accumsan ante, sed efficitur nunc placerat in. Etiam non lorem leo. Aenean magna lacus, iaculis at velit non, congue commodo dui. Pellentesque tempus elementum tempor.</p>
</lg-tab-nav-content>
  `;
}

const tabNavBarStory: StoryFn<LgTabsModule> = (args: LgTabsModule) => ({
  props: args,
  template: getTemplate(true),
});

export const tabNavBar = tabNavBarStory.bind({});
tabNavBar.storyName = 'Tabbed navigation';

tabNavBar.args = {
  tabs: [ 'Tab 1', 'Tab 2', 'Tab 3', 'Tab 4' ],
  selectedTabNavIndex: 1,
};

tabNavBar.parameters = {
  docs: {
    source: {
      code: getTemplate(),
    },
  },
};

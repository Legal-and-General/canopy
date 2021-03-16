import { object, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgMarginModule } from '../spacing';
import { LgTabsModule } from './tabs.module';
import { tabbedNavNotes } from './tabs.notes';

export default {
  title: 'Components/Tabs/Tabbed Navigation',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgTabsModule, LgMarginModule],
      }),
    ],
    notes: {
      markdown: tabbedNavNotes,
    },
  },
};

export const standard = () => ({
  template: `
  <lg-tab-nav-bar label="Tabbed navigation demo">
    <a *ngFor="let tab of tabs; index as i" lgTabNavBarLink href="" (click)="onClick($event)" id="tabbed-nav-{{i}}" [isActive]="i === selectedTabNavIndex">{{tab}}</a>
  </lg-tab-nav-bar>

  <lg-tab-nav-content [selectedTabId]="'tabbed-nav-' + selectedTabNavIndex">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere nec leo nec hendrerit. Pellentesque eu lacinia tortor. Donec urna felis, dictum et faucibus et, interdum ut urna. Nam eleifend eleifend mi vel blandit. Morbi rutrum a odio in pharetra. Quisque vitae lacus efficitur, elementum mauris in, porta nisl. Praesent porttitor accumsan ante, sed efficitur nunc placerat in. Etiam non lorem leo. Aenean magna lacus, iaculis at velit non, congue commodo dui. Pellentesque tempus elementum tempor.</p>
  </lg-tab-nav-content>
  `,
  props: {
    tabs: object('Tabs', getDefaultTabsContent()),
    selectedTabNavIndex: 1,
    onClick: (event: MouseEvent) => event.preventDefault(),
  },
});

function getDefaultTabsContent(): Array<string> {
  return ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];
}

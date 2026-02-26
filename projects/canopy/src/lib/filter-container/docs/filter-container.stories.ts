import { Directive, Input } from '@angular/core';
import { Meta, moduleMetadata } from '@storybook/angular';

import {
  ButtonPriority,
  LgButtonComponent,
  LgButtonGroupComponent,
  LgButtonToggleDirective,
} from '../../button';
import { LgFilterContainerComponent } from '../filter-container.component';
import { LgFilterContainerPanelComponent } from '../filter-container-panel/filter-container-panel.component';
import { LgFilterContainerPanelBodyComponent } from '../filter-container-panel-body/filter-container-panel-body.component';
import { LgFilterContainerPanelFooterComponent } from '../filter-container-panel-footer/filter-container-panel-footer.component';
import { LgIconComponent } from '../../icon';

@Directive({
  selector: '[lgStoryToggle]',
  standalone: true,
})
class StoryToggleDirective {
  @Input() variant: ButtonPriority;
}

const buttonVariants = [ 'primary', 'secondary' ];

// This default export determines where your story goes in the story list
export default {
  title: 'Patterns/Filter container/Examples',
  tags: [ 'pending' ],
  decorators: [
    moduleMetadata({
      imports: [
        StoryToggleDirective,
        LgFilterContainerComponent,
        LgFilterContainerPanelComponent,
        LgFilterContainerPanelBodyComponent,
        LgFilterContainerPanelFooterComponent,
        LgButtonGroupComponent,
        LgButtonComponent,
        LgIconComponent,
        LgButtonToggleDirective,
      ],
    }),
  ],
  argTypes: {
    variant: {
      options: [ ...buttonVariants ],
      table: {
        defaultValue: 'primary',
        type: {
          summary: 'ButtonPriority',
        },
      },
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

function setComponentCode(toggleCode: string) {
  return `
<lg-filter-container>
  ${toggleCode}
  <lg-filter-container-panel>
    <lg-filter-container-panel-body>
      Form inputs should go in here
    </lg-filter-container-panel-body>

    <lg-filter-container-panel-footer>
      <lg-button-group>
        <button
          lg-button
          variant="primary"
        >Apply</button>
        <button
          lg-button
          variant="secondary"
        >Cancel</button>
      </lg-button-group>
    </lg-filter-container-panel-footer>
  </lg-filter-container-panel>
</lg-filter-container>
`;
}

export const StandardFilterContainer = {
  name: 'Filter container',
  render: (args: LgFilterContainerComponent) => ({
    props: args,
    template: setComponentCode(`
      <button lg-button [variant]="variant" lgButtonToggle lgStoryToggle [rightIcon]="'chevron-down'">
        Filters
      </button>
    `),
  }),
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Filters' }));
  },
  args: {
    variant: 'secondary',
  },
  parameters: {
    docs: {
      source: {
        code: setComponentCode(`
          <button lg-button [variant]="variant" lgButtonToggle [rightIcon]="'chevron-down'">
            Filters
          </button>
        `),
      },
    },
    percy: {
      waitForSelector: '.lg-filter-container-panel--active',
    },
  },
};

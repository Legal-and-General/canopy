import { Directive, Input } from '@angular/core';
import { Meta, moduleMetadata } from '@storybook/angular';

import {
  ButtonVariant,
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
  @Input() variant: ButtonVariant;
}

const buttonVariants = [ 'primary-dark', 'secondary-dark' ];

// This default export determines where your story goes in the story list
export default {
  title: 'Patterns/Filter container/Examples',
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
        defaultValue: 'primary-dark',
        type: {
          summary: 'ButtonVariant',
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
          variant="primary-dark"
        >Apply</button>
        <button
          lg-button
          variant="secondary-dark"
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
      <button lg-button [variant]="variant" lgButtonToggle lgStoryToggle>
        <lg-icon name="filter" first></lg-icon>
        Filters
        <lg-icon name="chevron-down" second></lg-icon>
      </button>
    `),
  }),
  args: {
    variant: 'secondary-dark',
  },
  parameters: {
    docs: {
      source: {
        code: setComponentCode(`
          <button lg-button [variant]="variant" lgButtonToggle>
            <lg-icon name="filter" first></lg-icon>
            Filters
            <lg-icon name="chevron-down" second></lg-icon>
          </button>
        `),
      },
    },
  },
};

import { Directive, Input } from '@angular/core';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { lgIconChevronDown, lgIconFilter, LgIconRegistry } from '../../icon';
import { ButtonVariant } from '../../button';
import { LgFilterContainerModule } from '../filter-container.module';

@Directive({
  selector: '[lgStoryToggle]',
})
class StoryToggleDirective {
  @Input() variant: ButtonVariant;

  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([ lgIconFilter, lgIconChevronDown ]);
  }
}

const buttonVariants = [ 'primary-dark', 'secondary-dark' ];

// This default export determines where your story goes in the story list
export default {
  title: 'Patterns/Filter container/Examples',
  decorators: [
    moduleMetadata({
      declarations: [ StoryToggleDirective ],
      imports: [ LgFilterContainerModule ],
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

const filterContainerTemplate: StoryFn<LgFilterContainerModule> = (
  args: LgFilterContainerModule,
) => ({
  props: args,
  template: setComponentCode(`
<button lg-button [variant]="variant" lgButtonToggle lgStoryToggle>
  <lg-icon name="filter" first></lg-icon>
  Filters
  <lg-icon name="chevron-down" second></lg-icon>
</button>
  `),
});

export const standardFilterContainer = filterContainerTemplate.bind({});
standardFilterContainer.storyName = 'Filter container';

standardFilterContainer.args = {
  variant: 'secondary-dark',
};

standardFilterContainer.parameters = {
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
};

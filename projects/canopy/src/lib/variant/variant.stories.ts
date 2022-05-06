import { Component, Input } from '@angular/core';

import { moduleMetadata, Story } from '@storybook/angular';

import { LgVariantDirective } from '.';
import { LgButtonModule } from '../button';
import { LgCardModule } from '../card';
import { LgGridModule } from '../grid';
import { LgIconModule, LgIconRegistry, lgIconsArray } from '../icon';
import { LgShadowModule } from '../shadow';
import { LgSpacingModule } from '../spacing';
import type { Variant } from './variant.interface';
import { LgVariantModule } from './variant.module';
import { notes } from './variant.notes';

const variants = ['generic', 'info', 'success', 'warning', 'error'];

@Component({
  selector: 'lg-variant-story',
  template: `
    <lg-card lgShadow [lgVariant]="variant" lgPaddingLeft="lg" lgPaddingRight="lg">
      <lg-card-content>
        <p><strong>The variant directive</strong></p>
        <p>
          This card has the <strong>{{ variant }}</strong> variant applied. Here is some
          <a href="#">link text</a>.
        </p>
        <button lg-button variant="secondary-dark">Outline primary button</button>
        <br />
        <a href="#" lg-button variant="secondary-dark" lgMarginBottom="none">
          Outline primary link styled as button
        </a>
      </lg-card-content>
    </lg-card>
    <lg-card lgShadow>
      <lg-card-content>
        This card doesn't use the varaint directive. Here is some
        <a href="#">link text</a>.
      </lg-card-content>
    </lg-card>
  `,
})
class LgVariantStoryComponent {
  @Input() variant: Variant;
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons(lgIconsArray);
  }
}

export default {
  title: 'Directives/Variant',
  decorators: [
    moduleMetadata({
      declarations: [LgVariantStoryComponent],
      imports: [
        LgVariantModule,
        LgCardModule,
        LgButtonModule,
        LgSpacingModule,
        LgGridModule,
        LgIconModule,
        LgShadowModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    variant: {
      options: variants,
      description: 'The variant to apply to the component.',
      table: {
        type: {
          summary: variants,
        },
      },
      control: {
        type: 'select',
      },
    },
  },
};

const template = `
<lg-variant-story [variant]="variant"></lg-variant-story>
`;
const exampleTemplate = `
<lg-card lgVariant="success">
  <lg-card-content>
    <p>
      This card has the <strong>success</strong> variant applied. Here is some
      <a href="#">link text</a>.
    </p>
    <button lg-button variant="secondary-dark" lgMarginBottom="none">Outline primary button</button>
  </lg-card-content>
</lg-card>
`;

const variantStory: Story<LgVariantDirective> = (args: LgVariantDirective) => ({
  props: args,
  template,
});

export const standardVariant = variantStory.bind({});
standardVariant.storyName = 'Variant';
standardVariant.args = {
  variant: 'success',
};
standardVariant.parameters = {
  docs: {
    source: {
      code: exampleTemplate,
    },
  },
};

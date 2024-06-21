import { Component, Input } from '@angular/core';
import { moduleMetadata, StoryFn } from '@storybook/angular';

import { LgButtonModule } from '../../button';
import { LgCardModule } from '../../card';
import { LgGridModule } from '../../grid';
import { LgIconModule, LgIconRegistry, lgIconsArray } from '../../icon';
import { LgShadowModule } from '../../shadow';
import { LgSpacingModule } from '../../spacing';
import type { Variant } from '../variant.interface';
import { LgVariantModule } from '../variant.module';
import { LgVariantDirective } from '..';

const variants = [
  'theme-1-bold--light',
  'theme-1-bold--dark',
  'theme-1-subtle--light',
  'theme-1-subtle--dark',
  'theme-2-bold--light',
  'theme-2-bold--dark',
  'theme-2-subtle--light',
  'theme-2-subtle--dark',
  'theme-3-bold--light',
  'theme-3-bold--dark',
  'theme-3-subtle--light',
  'theme-3-subtle--dark',
  'theme-4-bold--light',
  'theme-4-bold--dark',
  'theme-4-subtle--light',
  'theme-4-subtle--dark',
  'theme-5-subtle--light',
  'theme-5-subtle--dark',
];

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
        <button
          lg-button
          variant="primary-{{ variant.includes('dark') ? 'light' : 'dark' }}"
        >
          Outline primary button
        </button>
        <br />
        <a
          href="#"
          lg-button
          variant="secondary-{{ variant.includes('dark') ? 'light' : 'dark' }}"
          lgMarginBottom="none"
        >
          Outline secondary link styled as button
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
  title: 'Helpers/Directives/Variant/Examples',
  decorators: [
    moduleMetadata({
      declarations: [ LgVariantStoryComponent ],
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
<lg-card lgVariant="theme-1-bold--light">
  <lg-card-content>
    <p>
      This card has the <strong>theme-1-bold--light</strong> variant applied. Here is some
      <a href="#">link text</a>.
    </p>
    <button lg-button variant="primary-dark" lgMarginBottom="none">Primary dark button</button>
    <button lg-button variant="secondary-dark" lgMarginBottom="none">Secondary dark button</button>
  </lg-card-content>
</lg-card>
`;

const variantStory: StoryFn<LgVariantDirective> = (args: LgVariantDirective) => ({
  props: args,
  template,
});

export const standardVariant = variantStory.bind({});
standardVariant.storyName = 'Variant';

standardVariant.args = {
  variant: 'theme-1-bold--light',
};

standardVariant.parameters = {
  docs: {
    source: {
      code: exampleTemplate,
    },
  },
};

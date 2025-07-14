import { Component, Input } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';

import type { Variant } from '../variant.interface';
import { LgVariantDirective } from '..';
import { LgCardComponent, LgCardContentComponent } from '../../card';
import { LgButtonComponent } from '../../button';
import { LgShadowDirective } from '../../shadow';
import { LgMarginDirective, LgPaddingDirective } from '../../spacing';

const variants = [ 'generic', 'info', 'success', 'warning', 'error' ];

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
  standalone: true,
  imports: [
    LgCardComponent,
    LgCardContentComponent,
    LgVariantDirective,
    LgButtonComponent,
    LgShadowDirective,
    LgMarginDirective,
    LgPaddingDirective,
  ],
})
class LgVariantStoryComponent {
  @Input() variant: Variant;
}

export default {
  title: 'Helpers/Directives/Variant/Examples',
  decorators: [
    moduleMetadata({
      imports: [ LgVariantStoryComponent ],
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

export const standardVariant = {
  name: 'Variant',
  render: (args: LgVariantDirective) => ({
    props: args,
    template,
  }),
  args: {
    variant: 'success',
  },
  parameters: {
    docs: {
      source: {
        code: exampleTemplate,
      },
    },
  },
};

import { Component, Input } from '@angular/core';

import { select, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgButtonModule } from '../button';
import { LgCardModule } from '../card';
import { LgGridModule } from '../grid';
import { LgIconModule, LgIconRegistry } from '../icon';
import { iconsArray } from '../icon/icons.stories';
import { LgSpacingModule } from '../spacing';
import { Variant } from './variant.interface';
import { LgVariantModule } from './variant.module';
import { notes } from './variant.notes';

const variants = ['generic', 'info', 'success', 'warning', 'error'];

@Component({
  selector: 'lg-variant-story',
  template: `
    <lg-card [lgVariant]="variant" lgPaddingLeft="lg" lgPaddingRight="lg">
      <lg-card-content>
        <p><strong>The variant directive</strong></p>
        <p>
          This card has the <strong>{{ variant }}</strong> variant applied. Here is some
          <a href="#">link text</a>.
        </p>
        <button lg-button variant="outline-primary">Outline primary button</button>
        <br />
        <a href="#" lg-button variant="outline-primary" lgMarginBottom="none">
          Outline primary link styled as button
        </a>
      </lg-card-content>
    </lg-card>
    <lg-card>
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
    this.registry.registerIcons(iconsArray);
  }
}

export default {
  title: 'Directives',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [LgVariantStoryComponent],
        imports: [
          LgVariantModule,
          LgCardModule,
          LgButtonModule,
          LgSpacingModule,
          LgGridModule,
          LgIconModule,
        ],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const variant = () => ({
  template: `
    <lg-variant-story [variant]="variant"></lg-variant-story>
  `,
  props: {
    variant: select('variant', variants, 'success'),
  },
});

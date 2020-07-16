import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgCardModule } from '../card/card.module';
import { LgGridModule } from '../grid/grid.module';

import { LgPaddingModule } from '../spacing/padding/padding.module';
import { notes } from './card.notes';

export default {
  title: 'Components/Card',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgCardModule, LgGridModule, LgPaddingModule],
      }),
    ],
    'in-dsm': {
      id: '5ede22091f488863e2eeaa35',
    },
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
    <lg-card>
      <lg-card-header>
        <lg-card-title headingLevel="4">
          {{title}}
        </lg-card-title>
      </lg-card-header>
      <lg-card-content>
        {{cardContent}}
      </lg-card-content>
    </lg-card>
  `,
  props: {
    title: text('title', 'Card title'),
    cardContent: text(
      'cardContent',
      `Leverage agile frameworks to provide a robust synopsis for high level
    overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall
    value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity
    and empowerment.`,
    ),
  },
});

export const nestedGrid = () => ({
  template: `
  <lg-card lgPaddingHorizontal="none">
    <div lgContainer>
      <div lgRow>
        <div lgCol="12" lgColMd="10" lgColMdOffset="1">
          <lg-card-content>
            {{cardContent}}
          </lg-card-content>
        </div>
      </div>
    </div>
  </lg-card>
  `,
  props: {
    cardContent: text(
      'cardContent',
      `Leverage agile frameworks to provide a robust synopsis for high level
    overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall
    value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity
    and empowerment.`,
    ),
  },
});

export const product = () => ({
  template: `
    <lg-card>
      <lg-card-header>
        <lg-card-title headingLevel="4">
          <a href="#">{{title}}</a>.
        </lg-card-title>
        <lg-card-subtitle>
          Payroll Reference Number P23456
        </lg-card-subtitle>
        <lg-card-principle-data-point>
          <lg-card-principle-data-point-label>
            Last payment (after tax and deductions)
          </lg-card-principle-data-point-label>
          <lg-card-principle-data-point-value>
            <span><span class="lg-font-size-3">£</span>230.20</span>
          </lg-card-principle-data-point-value>
          <lg-card-principle-data-point-date>
            as of 01 Jan 2020
          </lg-card-principle-data-point-date>
        </lg-card-principle-data-point>
      </lg-card-header>
    </lg-card>
  `,
  props: {
    title: text('title', 'Standard Lifetime Annuity Joint Life Full'),
  },
});

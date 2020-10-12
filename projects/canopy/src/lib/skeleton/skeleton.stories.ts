import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgCardModule } from '../card/card.module';
import { LgGridModule } from '../grid/grid.module';

import { LgPaddingModule } from '../spacing/padding/padding.module';
import { LgSkeletonModule } from './skeleton.module';

export default {
  title: 'Components/Skeleton',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgCardModule, LgGridModule, LgPaddingModule, LgSkeletonModule],
      }),
    ],
    'in-dsm': {
      // id: '5ede22091f488863e2eeaa35',
    },
    notes: {
      // markdown: notes,
    },
  },
};

export const product = () => ({
  template: `
  <div style="position:relative">
    <div style="position: absolute; top: 0">
      <lg-card>
        <lg-card-header>
          <lg-card-title headingLevel="4">
            <a lgSkeleton="8" href="#"></a>
          </lg-card-title>
          <lg-card-subtitle lgSkeleton="5">
          </lg-card-subtitle>
          <lg-card-principle-data-point>
            <lg-card-principle-data-point-label lgSkeleton="8">
            </lg-card-principle-data-point-label>
            <lg-card-principle-data-point-value lgSkeleton="5">
            </lg-card-principle-data-point-value>
            <lg-card-principle-data-point-date lgSkeleton="4">
            </lg-card-principle-data-point-date>
          </lg-card-principle-data-point>
        </lg-card-header>
      </lg-card>
    </div>
    <div style="display: none; position: absolute; top: 0; opacity: 0.2">
      <lg-card>
      <lg-card-header>
        <lg-card-title headingLevel="4">
          <a href="#">{{title}}</a>
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
  </div>
  </div>
  `,
  props: {
    title: text('title', 'Standard Lifetime Annuity Joint Life Full'),
  },
});

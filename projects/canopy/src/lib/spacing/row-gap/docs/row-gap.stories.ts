import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata } from '@storybook/angular';
import { JsonPipe } from '@angular/common';

import { SpacingVariant } from '../../spacing.interface';
import { LgRowGapDirective } from '../row-gap.directive';
import { LgCardComponent, LgCardContentComponent } from '../../../card';
import {
  LgGridColDirective,
  LgGridContainerDirective,
  LgGridRowDirective,
} from '../../../grid';
import { LgMarginDirective } from '../../margin';

const spaces = [
  'undefined',
  'none',
  'xxxs',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
  'xxxxl',
];

@Component({
  selector: 'lg-row-gap-story',
  template: `
    <div lgContainer>
      <div lgRow [lgRowGap]="rowGap">
        <div lgColLg="4" lgCol="12">
          <lg-card lgMarginBottom="none">
            <lg-card-content>
              <p><strong>The row-gap directive</strong></p>
              <p>Resize the viewport to see it in action</p>
              <p>
                <code>row-gap: {{ rowGap | json }}</code>
              </p>
            </lg-card-content>
          </lg-card>
        </div>
        <div lgColLg="4" lgCol="12">
          <lg-card lgMarginBottom="none">
            <lg-card-content>
              <p><strong>The row-gap directive</strong></p>
              <p>Resize the viewport to see it in action</p>
              <p>
                <code>row-gap: {{ rowGap | json }}</code>
              </p>
            </lg-card-content>
          </lg-card>
        </div>
        <div lgColLg="4" lgCol="12">
          <lg-card lgMarginBottom="none">
            <lg-card-content>
              <p><strong>The row-gap directive</strong></p>
              <p>Resize the viewport to see it in action</p>
              <p>
                <code>row-gap: {{ rowGap | json }}</code>
              </p>
            </lg-card-content>
          </lg-card>
        </div>
      </div>
    </div>
  `,
  imports: [
    LgCardComponent,
    LgCardContentComponent,
    JsonPipe,
    LgRowGapDirective,
    LgGridContainerDirective,
    LgGridColDirective,
    LgMarginDirective,
    LgGridRowDirective,
  ],
})
class LgRowGapStoryComponent {
  @Input() rowGap: SpacingVariant;
}

export default {
  title: 'Helpers/Directives/Row gap/Examples',
  decorators: [
    moduleMetadata({
      imports: [ LgRowGapStoryComponent ],
    }),
  ],
  parameters: {
    a11y: {
      disable: true,
    },
  },
  globals: {
    backgrounds: { value: 'breezy-blue' },
  },
  argTypes: {
    rowGap: {
      control: {
        type: 'select',
      },
      description: 'The row-gap to apply to the element.',
      options: spaces,
      table: {
        type: {
          summary: spaces.join(','),
        },
      },
    },
  },
} as Meta;

const template = `
<lg-row-gap-story [rowGap]="rowGap"></lg-row-gap-story>
`;

export const RowGap = {
  name: 'Row gap',
  render: (args: LgRowGapDirective) => ({
    props: args,
    template,
  }),
  args: {
    rowGap: 'sm',
  },
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
};

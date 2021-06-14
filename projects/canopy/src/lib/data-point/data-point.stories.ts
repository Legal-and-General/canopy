import { select, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { CanopyModule } from '../canopy.module';
import { notes } from './data-point.notes';

export default {
  title: 'Components/Data Point',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [CanopyModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const singleDataPoint = () => ({
  template: `
    <div lgContainer>
      <div lgRow>
        <div lgCol="12" lgColMd="8">
          <lg-data-point>
            <lg-data-point-label [headingLevel]="headingLevel">
              Annual increase
            </lg-data-point-label>
            <lg-data-point-value>
              Retail price index (RPI)
            </lg-data-point-value>
          </lg-data-point>
        </div>
      </div>
    </div>
  `,
  props: {
    headingLevel: select('headingLevel', [1, 2, 3, 4, 5, 6], 4),
  },
});

export const dataPointList = () => ({
  template: `
    <div lgContainer>
      <div lgRow>
        <div lgCol="12" lgColMd="8">
          <lg-data-point-list>
            <lg-data-point>
              <lg-data-point-label [headingLevel]="headingLevel">
                Name on account
              </lg-data-point-label>
              <lg-data-point-value>
                Joe Bloggs
              </lg-data-point-value>
            </lg-data-point>
            <lg-data-point>
              <lg-data-point-label [headingLevel]="headingLevel">
                Account number
              </lg-data-point-label>
              <lg-data-point-value>
                ***5678
              </lg-data-point-value>
            </lg-data-point>
            <lg-data-point>
              <lg-data-point-label [headingLevel]="headingLevel">
                Bank sort code
              </lg-data-point-label>
              <lg-data-point-value>
                00 - 00 - **
              </lg-data-point-value>
            </lg-data-point>
          </lg-data-point-list>
        </div>
      </div>
    </div>
  `,
  props: {
    headingLevel: select('headingLevel', [1, 2, 3, 4, 5, 6], 4),
  },
});

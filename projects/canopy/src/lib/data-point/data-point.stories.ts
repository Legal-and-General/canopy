import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { CanopyModule } from '../canopy.module';
import { notes } from './data-point.notes';

const stories = storiesOf('Components/Data Point', module).addDecorator(
  withKnobs
);

stories.add(
  'Single Data Point',
  () => {
    require('!style-loader!css-loader!sass-loader!./../../../../../.storybook/full-screen.css');

    return {
      moduleMetadata: {
        imports: [CanopyModule]
      },
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
        headingLevel: select('headingLevel', [1, 2, 3, 4, 5, 6], 4)
      }
    };
  },
  {
    notes: {
      markdown: notes
    }
  }
);

stories.add(
  'Data Point List',
  () => {
    require('!style-loader!css-loader!sass-loader!./../../../../../.storybook/full-screen.css');

    return {
      moduleMetadata: {
        imports: [CanopyModule]
      },
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
        headingLevel: select('headingLevel', [1, 2, 3, 4, 5, 6], 4)
      }
    };
  },
  {
    notes: {
      markdown: notes
    }
  }
);

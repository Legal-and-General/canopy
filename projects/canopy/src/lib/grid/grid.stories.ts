import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../canopy.module';
import { notes } from './grid.notes';

const stories = storiesOf('Directives', module);
const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const offsets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const firstColGroupId = 'Column 1';
const secondColGroupId = 'Column 2';
const thirdColGroupId = 'Column 3';

stories.addDecorator(withKnobs);

stories
  .addParameters({
    backgrounds: [{ name: 'default', value: '#0076d6', default: true }],
  })
  .add(
    'Grid',
    () => ({
      moduleMetadata: {
        imports: [CanopyModule],
      },
      template: `
        <div lgContainer>
          <div lgRow>
            <div
                [lgCol]="firstCol"
                [lgColMd]="firstColMd"
                [lgColLg]="firstColLg"
                [lgColOffset]="firstColOffset"
                [lgColMdOffset]="firstColMdOffset"
                [lgColLgOffset]="firstColLgOffset"
              >
              <lg-card lgMarginHorizontal="none">
                ${firstColGroupId}
              </lg-card>
            </div>
            <div
                [lgCol]="secondCol"
                [lgColMd]="secondColMd"
                [lgColLg]="secondColLg"
                [lgColOffset]="secondColOffset"
                [lgColMdOffset]="secondColMdOffset"
                [lgColLgOffset]="secondColLgOffset"
              >
              <lg-card lgMarginHorizontal="none">
              ${secondColGroupId}
              </lg-card>
            </div>
            <div
                [lgCol]="thirdCol"
                [lgColMd]="thirdColMd"
                [lgColLg]="thirdColLg"
                [lgColOffset]="thirdColOffset"
                [lgColMdOffset]="thirdColMdOffset"
                [lgColLgOffset]="thirdColLgOffset"
              >
              <lg-card lgMarginHorizontal="none">
                ${thirdColGroupId}
              </lg-card>
            </div>
          </div>
        </div>

      `,
      props: {
        firstCol: select('rows', columns, 12, firstColGroupId),
        firstColMd: select('rows (md+)', columns, 4, firstColGroupId),
        firstColLg: select('rows (lg+)', columns, 3, firstColGroupId),
        firstColOffset: select('offset rows', offsets, 0, firstColGroupId),
        firstColMdOffset: select(
          'offset rows (md+)',
          offsets,
          0,
          firstColGroupId,
        ),
        firstColLgOffset: select(
          'offset rows (lg+)',
          offsets,
          1,
          firstColGroupId,
        ),

        secondCol: select('rows', columns, 12, secondColGroupId),
        secondColMd: select('rows (md+)', columns, 4, secondColGroupId),
        secondColLg: select('rows (lg+)', columns, 3, secondColGroupId),
        secondColOffset: select('offset rows', offsets, 0, secondColGroupId),
        secondColMdOffset: select(
          'offset rows (md+)',
          offsets,
          0,
          secondColGroupId,
        ),
        secondColLgOffset: select(
          'offset rows (lg+)',
          offsets,
          1,
          secondColGroupId,
        ),

        thirdCol: select('rows', columns, 12, thirdColGroupId),
        thirdColMd: select('rows (md+)', columns, 4, thirdColGroupId),
        thirdColLg: select('rows (lg+)', columns, 3, thirdColGroupId),
        thirdColOffset: select('offset rows', offsets, 0, thirdColGroupId),
        thirdColMdOffset: select(
          'offset rows (md+)',
          offsets,
          0,
          thirdColGroupId,
        ),
        thirdColLgOffset: select(
          'offset rows (lg+)',
          offsets,
          1,
          thirdColGroupId,
        ),
      },
    }),
    {
      notes: {
        markdown: notes,
      },
    },
  );

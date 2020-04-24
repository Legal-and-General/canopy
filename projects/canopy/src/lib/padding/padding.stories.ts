import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../canopy.module';
import { notes } from './padding.notes';

const stories = storiesOf('Directives', module);
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
  'xxxxl'
];

stories.addDecorator(withKnobs);

stories
  .addParameters({
    backgrounds: [{ name: 'default', value: '#0076d6', default: true }]
  })
  .add(
    'Padding',
    () => ({
      moduleMetadata: {
        imports: [CanopyModule]
      },
      template: `
        <lg-card
          [lgPadding]="padding"
          [lgPaddingTop]="paddingTop !== 'undefined' ? paddingTop : null"
          [lgPaddingRight]="paddingRight !== 'undefined' ? paddingRight : null"
          [lgPaddingBottom]="paddingBottom !== 'undefined' ? paddingBottom : null"
          [lgPaddingLeft]="paddingLeft !== 'undefined' ? paddingLeft : null">
            Card with directive applied
        </lg-card>
        <lg-card>Card without directive applied</lg-card>
      `,
      props: {
        padding: select('padding', spaces, 'md'),
        paddingTop: select('paddingTop', spaces, 'undefined'),
        paddingRight: select('paddingRight', spaces, 'undefined'),
        paddingBottom: select('paddingBottom', spaces, 'undefined'),
        paddingLeft: select('paddingLeft', spaces, 'undefined')
      }
    }),
    {
      notes: {
        markdown: notes
      }
    }
  );

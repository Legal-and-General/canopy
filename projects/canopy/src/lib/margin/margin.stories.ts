import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../canopy.module';
import { notes } from './margin.notes';

const stories = storiesOf('Directives', module);
const spaces = [
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
    'Margin',
    () => ({
      moduleMetadata: {
        imports: [CanopyModule]
      },
      template: `
        <lg-card 
          [lgMargin]="margin"
          [lgMarginTop]="marginTop"
          [lgMarginRight]="marginRight"
          [lgMarginLeft]="marginLeft"
          [lgMarginBottom]="marginBottom">
            Card with directive applied
        </lg-card>
        <lg-card>Card without directive applied</lg-card>
      `,
      props: {
        margin: select('margin', spaces, 'md'),
        marginTop: select('marginTop', spaces, 'none'),
        marginRight: select('marginRight', spaces, 'none'),
        marginBottom: select('marginBottom', spaces, 'none'),
        marginLeft: select('marginLeft', spaces, 'none')
      }
    }),
    {
      notes: {
        markdown: notes
      }
    }
  );

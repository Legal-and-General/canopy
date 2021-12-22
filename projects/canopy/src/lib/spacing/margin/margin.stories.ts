import { object, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../../canopy.module';
import { notes } from './margin.notes';

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
  'xxxxl',
];

stories.addDecorator(withKnobs);

stories
  .addParameters({
    backgrounds: [{ name: 'default', value: '#0076d6', default: true }],
  })
  .add(
    'Margin',
    () => ({
      moduleMetadata: {
        imports: [CanopyModule],
      },
      template: `
        <lg-card
          [lgMargin]="margin"
          [lgMarginTop]="marginTop !== 'undefined' ? marginTop : null"
          [lgMarginRight]="marginRight !== 'undefined' ? marginRight : null"
          [lgMarginBottom]="marginBottom !== 'undefined' ? marginBottom : null"
          [lgMarginLeft]="marginLeft !== 'undefined' ? marginLeft : null">
            <lg-card-content>
              <strong>Standard Spacing Variant</strong>
              <div *ngIf="margin"><code>margin: {{margin | json}}</code></div>
              <div *ngIf="marginTop !== 'undefined'"><code>marginTop: {{marginTop | json}}</code></div>
              <div *ngIf="marginRight !== 'undefined'"><code>marginRight: {{marginRight | json}}</code></div>
              <div *ngIf="marginBottom !== 'undefined'"><code>marginBottom: {{marginBottom | json}}</code></div>
              <div *ngIf="marginLeft !== 'undefined'"><code>marginLeft: {{marginLeft | json}}</code></div>
            </lg-card-content>
        </lg-card>
        <lg-card
          [lgMargin]="marginResponsive"
          [lgMarginTop]="marginTopResponsive !== 'undefined' ? marginTopResponsive : null"
          [lgMarginRight]="marginRightResponsive !== 'undefined' ? marginRightResponsive : null"
          [lgMarginBottom]="marginBottomResponsive !== 'undefined' ? marginBottomResponsive : null"
          [lgMarginLeft]="marginLeftResponsive !== 'undefined' ? marginLeftResponsive : null">
            <lg-card-content>
              <strong>Responsive Spacing Object</strong>
              <div *ngIf="marginResponsive"><code>marginResponsive: {{marginResponsive | json}}</code></div>
              <div *ngIf="marginTopResponsive"><code>marginTopResponsive: {{marginTopResponsive | json}}</code></div>
              <div *ngIf="marginRightResponsive"><code>marginRightResponsive: {{marginRightResponsive | json}}</code></div>
              <div *ngIf="marginBottomResponsive"><code>marginBottomResponsive: {{marginBottomResponsive | json}}</code></div>
              <div *ngIf="marginLeftResponsive"><code>marginLeftResponsive: {{marginLeftResponsive | json}}</code></div>
            </lg-card-content>
        </lg-card>
        <lg-card><lg-card-content>Card without directive applied</lg-card-content></lg-card>
      `,
      props: {
        margin: select('margin', spaces, 'md', 'Standard'),
        marginTop: select('marginTop', spaces, 'undefined', 'Standard'),
        marginRight: select('marginRight', spaces, 'undefined', 'Standard'),
        marginBottom: select('marginBottom', spaces, 'undefined', 'Standard'),
        marginLeft: select('marginLeft', spaces, 'undefined', 'Standard'),

        marginResponsive: object(
          'margin',
          { xs: 'sm', sm: 'md', md: 'xxl' },
          'Responsive',
        ),
        marginTopResponsive: object('marginTop', null, 'Responsive'),
        marginRightResponsive: object('marginRight', null, 'Responsive'),
        marginBottomResponsive: object('marginBottom', null, 'Responsive'),
        marginLeftResponsive: object('marginLeft', null, 'Responsive'),
      },
    }),
    {
      notes: {
        markdown: notes,
      },
    },
  );

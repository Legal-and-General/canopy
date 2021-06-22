import { object, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../../canopy.module';
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
  'xxxxl',
];

stories.addDecorator(withKnobs);

stories
  .addParameters({
    backgrounds: [{ name: 'default', value: '#0076d6', default: true }],
  })
  .add(
    'Padding',
    () => ({
      moduleMetadata: {
        imports: [CanopyModule],
      },
      template: `
        <lg-card
          [lgPadding]="padding"
          [lgPaddingTop]="paddingTop !== 'undefined' ? paddingTop : null"
          [lgPaddingRight]="paddingRight !== 'undefined' ? paddingRight : null"
          [lgPaddingBottom]="paddingBottom !== 'undefined' ? paddingBottom : null"
          [lgPaddingLeft]="paddingLeft !== 'undefined' ? paddingLeft : null">
            <lg-card-content>
              <p class="lg-font-size-2"><strong>Static padding</strong></p>
              <p>Padding directive applied - using standard spacing variants</p>
            </lg-card-content>
        </lg-card>
        <lg-card
          [lgPadding]="paddingResponsive"
          [lgPaddingTop]="paddingTopResponsive !== 'undefined' ? paddingTopResponsive : null"
          [lgPaddingRight]="paddingRightResponsive !== 'undefined' ? paddingRightResponsive : null"
          [lgPaddingBottom]="paddingBottomResponsive !== 'undefined' ? paddingBottomResponsive : null"
          [lgPaddingLeft]="paddingLeftResponsive !== 'undefined' ? paddingLeftResponsive : null">
            <lg-card-content>
              <p class="lg-font-size-2"><strong>Responsive padding</strong></p>
              <p>Padding directive applied - using responsive spacing object</p>
              <div *ngIf="paddingResponsive"><code>paddingResponsive: {{paddingResponsive | json}}</code></div>
              <div *ngIf="paddingTopResponsive"><code>paddingTopResponsive: {{paddingTopResponsive | json}}</code></div>
              <div *ngIf="paddingRightResponsive"><code>paddingRightResponsive: {{paddingRightResponsive | json}}</code></div>
              <div *ngIf="paddingBottomResponsive"><code>paddingBottomResponsive: {{paddingBottomResponsive | json}}</code></div>
              <div *ngIf="paddingLeftResponsive"><code>paddingLeftResponsive: {{paddingLeftResponsive | json}}</code></div>
            </lg-card-content>
        </lg-card>
        <lg-card><lg-card-content>Card without directive applied</lg-card-content></lg-card>
      `,
      props: {
        padding: select('padding', spaces, 'md'),
        paddingTop: select('paddingTop', spaces, 'undefined'),
        paddingRight: select('paddingRight', spaces, 'undefined'),
        paddingBottom: select('paddingBottom', spaces, 'undefined'),
        paddingLeft: select('paddingLeft', spaces, 'undefined'),

        paddingResponsive: object('padding responsive', { sm: 'sm', md: 'xl' }, ''),
        paddingTopResponsive: object('paddingTop responsive', null, ''),
        paddingRightResponsive: object('paddingRight responsive', null, ''),
        paddingBottomResponsive: object('paddingBottom responsive', null, ''),
        paddingLeftResponsive: object('paddingLeft responsive', null, ''),
      },
    }),
    {
      notes: {
        markdown: notes,
      },
    },
  );

import { number, object, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../canopy.module';
import { primaryLinks, secondaryLinks } from '../footer/footer.stories';
import { productHeroHTML } from '../hero/hero.stories';
import { notes } from './page.notes';

const stories = storiesOf('Components/Page', module).addDecorator(withKnobs);
const footerGroupId = 'footer';
const contentGroupId = 'content';
const sharedGroupId = 'common';

const createProps = () => ({
  logo: text(
    'logo',
    'https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png',
    sharedGroupId
  ),
  logoAlt: text('logoAlt', 'Company name', sharedGroupId),
  copyright: text('copyright', '© Some Company plc 2019', footerGroupId),
  card1Content: text(
    'card1Content',
    `Leverage agile frameworks to provide a robust synopsis for high level
    overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall
    value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity
    and empowerment.
    `,
    contentGroupId
  ),
  card2Content: text(
    'card2Content',
    `Bring to the table win-win survival strategies to ensure proactive domination.
    At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading
    towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for
    offshoring.`,
    contentGroupId
  ),
  card3Content: text(
    'card3Content',
    `Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one
    customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art
    customer service.`,
    contentGroupId
  ),
  primaryLinks: object('primaryLinks', primaryLinks, footerGroupId),
  secondaryLinks: object('secondaryLinks', secondaryLinks, footerGroupId)
});

const header = `
  <header lg-header
    [logo]="logo"
    [logoAlt]="logoAlt"
    [logoHref]="logoHref">
  </header>
`;

const footer = `
  <footer lg-footer
    [logo]="logo"
    [logoAlt]="logoAlt"
    [copyright]="copyright"
    [primaryLinks]="primaryLinks"
    [secondaryLinks]="secondaryLinks">
  </footer>
`;

stories.add(
  'One Column',
  () => {
    require('!style-loader!css-loader!sass-loader!./../../../../../.storybook/full-screen.css');

    return {
      knobs: {
        escapeHTML: false
      },
      moduleMetadata: {
        imports: [CanopyModule]
      },
      props: createProps(),
      template: `
        <lg-page>
          ${header}
          <div lgContainer>
            <div lgRow>
              <div
                  lgCol="12"
                  lgColSm="10"
                  lgColSmOffset="1"
                  lgColMd="8"
                  lgColMdOffset="2"
                  lgColLg="6"
                  lgColLgOffset="3">
                <lg-card lgMarginHorizontal="none">{{card1Content}}</lg-card>
                <lg-card lgMarginHorizontal="none">{{card2Content}}</lg-card>
              </div>
            </div>
          </div>
          ${footer}
        </lg-page>
      `
    };
  },
  {
    notes: {
      markdown: notes
    }
  }
);

stories.add(
  'Two column',
  () => {
    require('!style-loader!css-loader!sass-loader!./../../../../../.storybook/full-screen.css');

    return {
      moduleMetadata: {
        imports: [CanopyModule]
      },
      props: createProps(),
      template: `
        <lg-page>
          ${header}
          <div lgContainer>
            <div lgRow>
              <div lgCol="12" lgColMd="8" lgColLg="5" lgColLgOffset="2">
                <lg-card lgMarginHorizontal="none">
                  {{card1Content}}
                  {{card3Content}}
                </lg-card>
              </div>
              <div lgCol="12" lgColMd="4" lgColLg="3">
                <lg-card lgMarginHorizontal="none">{{card2Content}}</lg-card>
                <lg-card lgMarginHorizontal="none">{{card3Content}}</lg-card>
              </div>
            </div>
          </div>
          ${footer}
        </lg-page>
      `
    };
  },
  {
    notes: {
      markdown: notes
    }
  }
);

stories.add(
  'Full width',
  () => {
    require('!style-loader!css-loader!sass-loader!./../../../../../.storybook/full-screen.css');

    return {
      moduleMetadata: {
        imports: [CanopyModule]
      },
      props: createProps(),
      template: `
        <lg-page>
          ${header}
          <div lgContainer>
            <div lgRow>
              <div lgCol="12">
                <lg-card lgMarginHorizontal="none">
                  {{card1Content}} <br /><br />
                  {{card2Content}} <br /><br />
                  {{card3Content}}
                </lg-card>
              </div>
            </div>
          </div>
          ${footer}
        </lg-page>
      `
    };
  },
  {
    notes: {
      markdown: notes
    }
  }
);

stories.add(
  'Hero with full width',
  () => {
    require('!style-loader!css-loader!sass-loader!./../../../../../.storybook/full-screen.css');

    return {
      moduleMetadata: {
        imports: [CanopyModule]
      },
      props: {
        ...createProps(),
        title: text('Title', 'Pension Annuity'),
        overlap: number('Overlap', 2)
      },
      template: `
        <lg-page>
          ${header}
          ${productHeroHTML}
          <div lgContainer>
            <div lgRow>
              <div lgCol="12">
                <lg-card lgMarginHorizontal="none">
                  {{card1Content}} <br /><br />
                  {{card2Content}} <br /><br />
                  {{card3Content}}
                </lg-card>
              </div>
            </div>
          </div>
          ${footer}
        </lg-page>
      `
    };
  },
  {
    notes: {
      markdown: notes
    }
  }
);

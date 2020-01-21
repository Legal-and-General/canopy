import { object, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { LgCardComponent } from '../card/card/card.component';
import { LgFooterComponent } from '../footer/footer.component';
import { primaryLinks, secondaryLinks } from '../footer/footer.stories';
import { LgHeaderComponent } from '../header/header.component';
import { LgPageComponent } from './page.component';
import { notes } from './page.notes';

const stories = storiesOf('Components', module).addDecorator(withKnobs);
const headerGroupId = 'header';
const footerGroupId = 'footer';
const contentGroupId = 'content';
const sharedGroupId = 'common';

stories.add(
  'Page',
  () => {
    require('!style-loader!css-loader!sass-loader!./../../../../../.storybook/full-screen.css');

    return {
      knobs: {
        escapeHTML: false
      },
      moduleMetadata: {
        declarations: [
          LgPageComponent,
          LgFooterComponent,
          LgHeaderComponent,
          LgCardComponent
        ]
      },
      template: `
        <lg-page>
          <header lg-header
            [logo]="logo"
            [logoAlt]="logoAlt"
            [logoHref]="logoHref">
          </header>
          <lg-card>{{card1Content}}</lg-card>
          <lg-card>{{card2Content}}</lg-card>
          <footer lg-footer
            [logo]="logo"
            [logoAlt]="logoAlt"
            [copyright]="copyright"
            [primaryLinks]="primaryLinks"
            [secondaryLinks]="secondaryLinks">
          </footer>
        </lg-page>
      `,
      props: {
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
          and empowerment.`,
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
        primaryLinks: object('primaryLinks', primaryLinks, footerGroupId),
        secondaryLinks: object('secondaryLinks', secondaryLinks, footerGroupId)
      }
    };
  },
  {
    notes: {
      markdown: notes
    }
  }
);

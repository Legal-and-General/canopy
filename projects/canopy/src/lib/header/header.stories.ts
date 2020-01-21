import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { LgHeaderComponent } from '../header/header.component';
import { notes } from './header.notes';

const stories = storiesOf('Components', module).addDecorator(withKnobs);

const groupId = 'header';

stories
  .addParameters({
    backgrounds: [{ name: 'default', value: '#f5f7fa', default: true }]
  })
  .add(
    'Header',
    () => {
      require('!style-loader!css-loader!sass-loader!../../../../../.storybook/full-screen.css');
      return {
        moduleMetadata: {
          declarations: [LgHeaderComponent]
        },
        template: `
        <header lg-header [logo]="logo" [logoAlt]="logoAlt" [logoHref]="logoHref"></header>
      `,
        props: {
          logo: text(
            'logo',
            'https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png',
            groupId
          ),
          logoAlt: text('logoAlt', 'Company name', groupId),
          logoHref: text('logoHref', 'https://storybook.js.org', groupId)
        }
      };
    },
    {
      notes: {
        markdown: notes
      }
    }
  );

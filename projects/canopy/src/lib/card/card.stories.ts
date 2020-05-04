import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { LgCardModule } from '../card/card.module';

import { notes } from './card.notes';

const stories = storiesOf('Components', module).addDecorator(withKnobs);

stories
  .addParameters({
    backgrounds: [{ name: 'default', value: '#f5f7fa', default: true }]
  })
  .add(
    'Card',
    () => ({
      moduleMetadata: {
        imports: [LgCardModule]
      },
      template: `
      <lg-card>
        <lg-card-header>
          {{title}}
        </lg-card-header>
        <lg-card-content>
          {{cardContent}}
        </lg-card-content>
      </lg-card>
    `,
      props: {
        title: text('title', `Card title`),
        cardContent: text(
          'cardContent',
          `Leverage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall
        value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity
        and empowerment.`
        )
      }
    }),
    {
      notes: {
        markdown: notes
      }
    }
  );

import { object, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { LgCardComponent } from '../../card/card/card.component';
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
        declarations: [LgCardComponent]
      },
      template: `
      <lg-card>
        {{cardContent}}
      </lg-card>
    `,
      props: {
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

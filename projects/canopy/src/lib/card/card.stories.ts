import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { LgCardModule } from '../card/card.module';
import { LgGridModule } from '../grid/grid.module';

import { notes } from './card.notes';
import { LgPaddingModule } from '../padding';

const stories = storiesOf('Components/Card', module).addDecorator(withKnobs);
const props = {
  title: text('title', 'Card title'),
  cardContent: text(
    'cardContent',
    `Leverage agile frameworks to provide a robust synopsis for high level
  overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall
  value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity
  and empowerment.`
  )
};

stories
  .addParameters({
    backgrounds: [{ name: 'default', value: '#f5f7fa', default: true }]
  })
  .add(
    'Standard',
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
      props
    }),
    {
      notes: {
        markdown: notes
      }
    }
  );

stories
  .addParameters({
    backgrounds: [{ name: 'default', value: '#f5f7fa', default: true }]
  })
  .add(
    'Nested Grid',
    () => ({
      moduleMetadata: {
        imports: [LgCardModule, LgGridModule, LgPaddingModule]
      },
      template: `<lg-card lgPaddingHorizontal="none">
        <div lgContainer>
          <div lgRow>
            <div lgCol="12" lgColMd="10" lgColMdOffset="1">
              <lg-card-content> 
                {{cardContent}}
              </lg-card-content>
            </div>
          </div>
        </div>
      </lg-card>
    `,
      props
    }),
    {
      notes: {
        markdown: notes
      }
    }
  );

import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgCardModule } from '../card/card.module';
import { LgGridModule } from '../grid/grid.module';
import { LgPaddingModule } from '../spacing/padding/padding.module';
import { notes } from './card.notes';

export default {
  title: 'Components/Card',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgCardModule, LgGridModule, LgPaddingModule]
      })
    ],
    'in-dsm': {
      id: '5ede22091f488863e2eeaa35'
    },
    notes: {
      markdown: notes
    }
  }
};

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

export const standard = () => ({
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
});

export const nestedGrid = () => ({
  template: `
  <lg-card lgPaddingHorizontal="none">
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
});

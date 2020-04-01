import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../canopy.module';
import { notes } from './hero.notes';

const stories = storiesOf('Components', module).addDecorator(withKnobs);

stories.add(
  'Hero',
  () => {
    require('!style-loader!css-loader!sass-loader!./../../../../../.storybook/full-screen.css');

    return {
      moduleMetadata: {
        imports: [CanopyModule]
      },
      // lg-hero has an override top margin applied in this story in order to overide
      // the baked in margin that exists to allow the hero to sit flush against the
      // header when in the context of a page
      template: `
        <lg-hero [overlap]="overlap" [style.margin-top]="0">
          <div lgContainer>
            <div lgRow>
              <div lgCol="12">
              <lg-heading [level]="1">{{title}}</lg-heading>
              </div>
            </div>
          </div>
        </lg-hero>
        <div lgContainer>
          <div lgRow>
            <div lgCol="12">
              <lg-card>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fusce iaculis nunc vel pulvinar molestie. Quisque porta
                  interdum ligula, in pellentesque purus ultrices sed.
                  Praesent euismod nisi neque, eget varius eros consequat
                  eget. Morbi vulputate tincidunt risus, quis facilisis dui
                  interdum nec. Vestibulum et vulputate purus. Phasellus in
                  luctus nunc, vehicula convallis erat. Nunc dignissim nulla
                  at mattis efficitur. Nunc tempor auctor enim, in hendrerit
                  neque blandit sit amet. Donec efficitur mauris ut molestie
                  lobortis. Integer nec consectetur odio, ut aliquam tortor.
                </p>
              </lg-card>
            </div>
          </div>
        </div>
      `,
      props: {
        overlap: number('Overlap', 2),
        title: text('Title', 'Pension Annuity')
      }
    };
  },
  {
    notes: {
      markdown: notes
    }
  }
);

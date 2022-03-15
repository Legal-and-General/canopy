import { number, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { fullScreen } from '../../../../../.storybook/addons/full-screen';
import { CanopyModule } from '../canopy.module';
import { notes } from './hero-img.notes';

const bodyHTML = `
  <div lgContainer>
    <div lgRow>
      <div [lgCol]="12">
        <lg-card>
          <lg-card-content>
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
          </lg-card-content>
        </lg-card>
      </div>
    </div>
  </div>
`;

export const imageBackgroundHeroHTML = `
  <lg-hero-img [imageUrl]="imageUrl" [overlap]="overlap">
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12" [lgColLg]="6" [lgColMd]="12">
          <lg-hero-img-card>
            <lg-hero-img-card-title [headingLevel]="1">
              {{title}}
            </lg-hero-img-card-title>
            <lg-hero-img-card-subtitle [headingLevel]="2">
              {{subTitle}}
            </lg-hero-img-card-subtitle>
          </lg-hero-img-card>
        </div>
      </div>
    </div>
  </lg-hero-img>
`;

export default {
  title: 'Components/Hero Image',
  excludeStories: ['bodyHTML', 'imageBackgroundHeroHTML'],
  parameters: {
    decorators: [
      fullScreen,
      withKnobs,
      moduleMetadata({
        imports: [CanopyModule],
      }),
    ],
    notes: {
      markdown: notes(imageBackgroundHeroHTML),
    },
  },
};

export const imageBackground = () => ({
  template: `
  ${imageBackgroundHeroHTML}
  ${bodyHTML}
  `,
  props: {
    overlap: number('Overlap', 2),
    title: text('Title', 'Title'),
    subTitle: text('Subtitle', 'Subtitle'),
    imageUrl: 'hero-img/map-illustration.png',
  },
});

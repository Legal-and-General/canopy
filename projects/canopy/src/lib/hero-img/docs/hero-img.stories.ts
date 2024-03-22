import { moduleMetadata, StoryFn } from '@storybook/angular';

import { LgHeroImgComponent } from '../hero-img.component';
import { LgCardComponent, LgCardContentComponent } from '../../card';
import {
  LgGridColDirective,
  LgGridContainerDirective,
  LgGridRowDirective,
} from '../../grid';
import { LgHeroImgCardComponent } from '../hero-img-card/hero-img-card.component';
import { LgHeroImgCardTitleComponent } from '../hero-img-card-title/hero-img-card-title.component';
import { LgHeroImgCardSubtitleComponent } from '../hero-img-card-subtitle/hero-img-card-subtitle.component';

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
  title: 'Patterns/Hero image/Examples',
  excludeStories: [ 'imageBackgroundHeroHTML' ],
  decorators: [
    moduleMetadata({
      imports: [
        LgGridContainerDirective,
        LgGridRowDirective,
        LgGridColDirective,
        LgCardComponent,
        LgCardContentComponent,
        LgHeroImgComponent,
        LgHeroImgCardComponent,
        LgHeroImgCardTitleComponent,
        LgHeroImgCardSubtitleComponent,
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    overlap: {
      description: 'The amount that the page content overlaps the hero component (rem).',
      control: {
        type: 'number',
      },
    },
    imageUrl: {
      table: {
        disable: true,
      },
    },
  },
};

const template = `
${imageBackgroundHeroHTML}
${bodyHTML}
`;

const heroImgStory: StoryFn<LgHeroImgComponent> = (args: LgHeroImgComponent) => ({
  props: args,
  template,
});

export const heroImg = heroImgStory.bind({});
heroImg.storyName = 'Hero image';

heroImg.args = {
  overlap: 2,
  title: 'Title',
  subTitle: 'Subtitle',
  imageUrl: 'hero-img/map-illustration.png',
};

heroImg.parameters = {
  docs: {
    source: {
      code: imageBackgroundHeroHTML,
    },
  },
};

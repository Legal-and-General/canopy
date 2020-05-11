import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../canopy.module';
import { notes } from './hero.notes';

const stories = storiesOf('Components/Hero', module).addDecorator(withKnobs);

const bodyHTML = `
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
`;

export const productHeroHTML = `
<lg-hero [overlap]="overlap">
  <lg-hero-header>
    <div lgContainer>
      <div lgRow>
        <div lgCol="12">
          <lg-breadcrumb variant="light" lgMarginBottom="none">
            <lg-breadcrumb-item>
              <a href="#">
                <lg-icon [name]="'home'"></lg-icon>
                Home
              </a>
            </lg-breadcrumb-item>
            <lg-breadcrumb-item>
              <a href="#">Products</a>
            </lg-breadcrumb-item>
            <lg-breadcrumb-item>
              <a href="#" aria-current="page">Pension Annuity</a>
            </lg-breadcrumb-item>
          </lg-breadcrumb>
        </div>
      </div>
    </div>
  </lg-hero-header>
  <lg-hero-content>
    <div lgContainer>
      <div lgRow>
        <div lgCol="12">
          <lg-hero-card>
            <lg-hero-card-header>
              <lg-hero-card-title headingLevel="4">
                Pension annuity
              </lg-hero-card-title>
              <lg-hero-card-subtitle>
                Payroll Reference Number P23456
              </lg-hero-card-subtitle>
              <lg-hero-card-principle-data-point>
                <lg-hero-card-principle-data-point-label headingLevel="5">
                  Last payment (after tax and deductions)
                </lg-hero-card-principle-data-point-label>
                <lg-hero-card-principle-data-point-value>
                  £230.20
                </lg-hero-card-principle-data-point-value>
              </lg-hero-card-principle-data-point>
            </lg-hero-card-header>
            <lg-hero-card-content>
              <lg-hero-card-data-point-list>
                <lg-hero-card-data-point>
                  <lg-hero-card-data-point-label headingLevel="6">
                    Payment due
                  </lg-hero-card-data-point-label>
                  <lg-hero-card-data-point-value>
                    15 Jan 2020
                  </lg-hero-card-data-point-value>
                </lg-hero-card-data-point>
                <lg-hero-card-data-point>
                  <lg-hero-card-data-point-label headingLevel="6">
                    Payment frequency
                  </lg-hero-card-data-point-label>
                  <lg-hero-card-data-point-value>
                    Monthly
                  </lg-hero-card-data-point-value>
                </lg-hero-card-data-point>
                <lg-hero-card-data-point>
                  <lg-hero-card-data-point-label headingLevel="6">
                    Tax code
                  </lg-hero-card-data-point-label>
                  <lg-hero-card-data-point-value>
                    2T <span lgMarginLeft="sm" class="lg-font-size-1">Received on 12 Mar 2019</span>
                  </lg-hero-card-data-point-value>
                </lg-hero-card-data-point>
              </lg-hero-card-data-point-list>
            </lg-hero-card-content>
          </lg-hero-card>
        </div>
      </div>
    </div>
  </lg-hero-content>
</lg-hero>
`;

export const conversationalHeroHTML = `
<lg-hero [overlap]="overlap">
  <div lgContainer>
    <div lgRow>
      <div lgCol="12">
        <lg-hero-card>
          <lg-hero-card-header>
            <lg-hero-card-title headingLevel="4">
              Good morning, Gene
            </lg-hero-card-title>
          </lg-hero-card-header>
        </lg-hero-card>
      </div>
    </div>
  </div>
</lg-hero>
`;

const heroNotes = notes(productHeroHTML, conversationalHeroHTML);

stories.add(
  'Product data',
  () => {
    require('!style-loader!css-loader!sass-loader!./../../../../../.storybook/full-screen.css');

    return {
      moduleMetadata: {
        imports: [CanopyModule]
      },
      // lg-hero has an override top margin applied in this story in order to override
      // the baked in margin that exists to allow the hero to sit flush against the
      // header when in the context of a page
      template: `
        ${productHeroHTML}
        ${bodyHTML}
      `,
      props: {
        overlap: number('Overlap', 2),
        title: text('Title', 'Pension Annuity')
      }
    };
  },
  {
    notes: {
      markdown: heroNotes
    }
  }
);

stories.add(
  'Conversational UI',
  () => {
    require('!style-loader!css-loader!sass-loader!./../../../../../.storybook/full-screen.css');

    return {
      moduleMetadata: {
        imports: [CanopyModule]
      },
      // lg-hero has an override top margin applied in this story in order to override
      // the baked in margin that exists to allow the hero to sit flush against the
      // header when in the context of a page
      template: `
        ${conversationalHeroHTML}
        ${bodyHTML}
      `,
      props: {
        overlap: number('Overlap', 2),
        title: text('Title', 'Pension Annuity')
      }
    };
  },
  {
    notes: {
      markdown: heroNotes
    }
  }
);

import { Component, Input } from '@angular/core';
import { moduleMetadata, StoryFn } from '@storybook/angular';

import { LgBreadcrumbModule } from '../../breadcrumb/breadcrumb.module';
import { LgCardModule } from '../../card/card.module';
import { lgIconInformationFill, LgIconRegistry } from '../../icon';
import { LgHeroComponent } from '../hero.component';

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

export const productHeroHTML = `
<lg-hero-header>
  <div lgContainer>
    <div lgRow>
      <div [lgCol]="12">
        <lg-breadcrumb variant="light" lgMarginBottom="none">
          <lg-breadcrumb-item>
            <a href="#">
              <lg-icon name="home"></lg-icon>
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
      <div [lgCol]="12">
        <lg-hero-card>
          <lg-hero-card-header>
            <lg-hero-card-title [headingLevel]="4">
              Pension annuity
            </lg-hero-card-title>
            <lg-hero-card-subtitle>
              Payroll Reference Number P23456
            </lg-hero-card-subtitle>
            <lg-hero-card-notification>
              <lg-icon name="information-fill"></lg-icon>
              <p>Your payments have been suspended, please <a href="#">contact us</a> to learn more.</p>
            </lg-hero-card-notification>
            <lg-hero-card-principle-data-point>
              <lg-hero-card-principle-data-point-label [headingLevel]="5">
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
                <lg-hero-card-data-point-label [headingLevel]="6">
                  Payment due
                </lg-hero-card-data-point-label>
                <lg-hero-card-data-point-value>
                  15 Jan 2020
                </lg-hero-card-data-point-value>
              </lg-hero-card-data-point>
              <lg-hero-card-data-point>
                <lg-hero-card-data-point-label [headingLevel]="6">
                  Payment frequency
                </lg-hero-card-data-point-label>
                <lg-hero-card-data-point-value>
                  Monthly
                </lg-hero-card-data-point-value>
              </lg-hero-card-data-point>
              <lg-hero-card-data-point>
                <lg-hero-card-data-point-label [headingLevel]="6">
                  Tax code
                </lg-hero-card-data-point-label>
                <lg-hero-card-data-point-value>
                  2T <span lgMarginLeft="sm" class="lg-font-size-1">Received on 12 Mar 2019</span>
                </lg-hero-card-data-point-value>
              </lg-hero-card-data-point>
            </lg-hero-card-data-point-list>
          </lg-hero-card-content>
          <lg-hero-card-footer>
            <small class="lg-font-size-0-6">* This is not a guaranteed amount and could be subject to change.</small>
          </lg-hero-card-footer>
        </lg-hero-card>
      </div>
    </div>
  </div>
</lg-hero-content>
`;

export const conversationalHeroHTML = `
<lg-hero [overlap]="overlap">
  <lg-hero-content>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
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
  </lg-hero-content>
</lg-hero>
`;

const productHeroTemplate = `<lg-hero [overlap]="overlap" lgMarginTop="none">${productHeroHTML}</lg-hero>${bodyHTML}`;

@Component({
  selector: 'lg-hero-product-story',
  template: productHeroTemplate,
})
class HeroProductStoryComponent {
  @Input() overlap: number;

  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([ lgIconInformationFill ]);
  }
}

export default {
  title: 'Patterns/Hero/Examples',
  excludeStories: [ 'productHeroHTML', 'conversationalHeroHTML' ],
  decorators: [
    moduleMetadata({
      declarations: [ HeroProductStoryComponent ],
      imports: [ LgBreadcrumbModule, LgCardModule ],
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
  },
};

const productHeroStory: StoryFn<LgHeroComponent> = (args: LgHeroComponent) => ({
  props: args,
  template: '<lg-hero-product-story [overlap]="overlap"></lg-hero-product-story>',
});

export const productHero = productHeroStory.bind({});
productHero.storyName = 'Product details';

productHero.args = {
  overlap: 2,
};

productHero.parameters = {
  docs: {
    source: {
      code: productHeroTemplate,
    },
  },
};

const conversationalHeroTemplate = `
${conversationalHeroHTML}
${bodyHTML}
`;

const conversationalHeroStory: StoryFn<LgHeroComponent> = (args: LgHeroComponent) => ({
  props: args,
  template: conversationalHeroTemplate,
});

export const conversationalHero = conversationalHeroStory.bind({});
conversationalHero.storyName = 'Conversational UI';

conversationalHero.args = {
  overlap: 2,
};

conversationalHero.parameters = {
  docs: {
    source: {
      code: conversationalHeroHTML,
    },
  },
};

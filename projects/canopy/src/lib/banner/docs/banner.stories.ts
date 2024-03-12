import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { LgIconRegistry, LgIconComponent } from '../../icon';
import { IconName, lgIconsArray } from '../../icon';
import { LgBannerComponent } from '../banner.component';
import { BannerVariant } from '../banner-variant.interface';

const variantTypes = [ 'generic', 'warning' ];

@Component({
  selector: 'lg-banner-icon',
  template: `
    <lg-banner [variant]="variant">
      <lg-icon [name]="icon"></lg-icon>
      {{ content }}
    </lg-banner>
  `,
  standalone: true,
  imports: [ LgBannerComponent, LgIconComponent ],
})
class LgBannerIconComponent {
  @Input() content: string;
  @Input() variant: BannerVariant;
  @Input() icon: IconName;

  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons(lgIconsArray);
  }
}

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Banner message (WIP)/Examples',
  component: LgBannerComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgBannerIconComponent ],
    }),
  ],
  argTypes: {
    icon: {
      description: 'Icon to display',
      options: [ 'None', ...lgIconsArray.map(i => i.name) ],
      control: {
        type: 'select',
      },
    },
    content: {
      description: 'The projected content.',
    },
    variant: {
      options: variantTypes,
      description: 'Applies colour treatment and ARIA role if applicable.',
      table: {
        type: {
          summary: variantTypes,
        },
        defaultValue: {
          summary: 'generic',
        },
      },
      control: {
        type: 'select',
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
<lg-banner [variant]="variant">
  <lg-icon [name]="icon"></lg-icon>
  {{content}}
</lg-banner>
`;

const bannerTemplate: StoryFn<LgBannerComponent> = (args: LgBannerComponent) => ({
  props: args,
  template: `
    <lg-banner-icon
      [content]="content"
      [icon]="icon"
      [variant]="variant">
    </lg-banner-icon>
  `,
});

export const standardBanner = bannerTemplate.bind({});
standardBanner.storyName = 'Banner';

standardBanner.args = {
  content: 'This is a banner message.',
  variant: 'generic',
  icon: 'warning',
};

standardBanner.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};

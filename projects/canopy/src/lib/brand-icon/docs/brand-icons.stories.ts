import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { moduleMetadata, StoryFn } from '@storybook/angular';
import { NgForOf } from '@angular/common';

import { BrandIconSize, LgBrandIconComponent } from '../brand-icon.component';
import { LgBrandIconRegistry } from '../brand-icon.registry';
import { lgBrandIconsArray } from '../brand-icons.interface';

@Component({
  selector: 'lg-swatch-brand-icon',
  template: `
    <div class="swatch" *ngFor="let icon of icons; let i = index">
      <lg-brand-icon
        class="swatch__svg"
        [name]="icon.name"
        [size]="size"
        [colour]="i === 0 ? colour : null"
        [halfToneColour]="i === 2 ? halfToneColour : null"
        [outlinesColour]="i === 2 ? outlinesColour : null"
        [attr.style]="cssVar"
      ></lg-brand-icon>
      <span class="swatch__name">{{ icon.name }}</span>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
      }

      .swatch {
        margin: var(--space-md);
        flex: 0 0 8rem;
      }

      .swatch__name {
        display: block;
        text-align: center;
        margin-top: var(--space-xxs);
      }

      .swatch__svg {
        display: block;
        margin: 0 auto;
      }
    `,
  ],
  standalone: true,
  imports: [ LgBrandIconComponent, NgForOf ],
})
class SwatchBrandIconComponent implements OnChanges {
  @Input() size: BrandIconSize;
  @Input() colour: string;
  @Input() halfToneColour: string;
  @Input() outlinesColour: string;
  @Input() globalColour: string;

  icons = lgBrandIconsArray;
  cssVar: SafeStyle;

  constructor(
    private registry: LgBrandIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    this.registry.registerBrandIcon(this.icons);
  }

  ngOnChanges({ globalColour }: SimpleChanges) {
    if (globalColour && globalColour.currentValue) {
      this.cssVar = this.sanitizer.bypassSecurityTrustStyle(
        `--brand-icon-fill-primary: var(${globalColour.currentValue})`,
      );
    }
  }
}

const sizes = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' ];

const colours = [
  '--color-dandelion-yellow',
  '--color-super-blue',
  '--color-lily-green',
  '--color-shocking-pink',
  '--color-poppy-red-dark',
  '--color-transparent',
];

export default {
  title: 'Foundations/Brand icon/Catalog',
  decorators: [
    moduleMetadata({
      imports: [ SwatchBrandIconComponent, LgBrandIconComponent ],
    }),
  ],
  argTypes: {
    size: {
      options: sizes,
      description: 'The size of the icon',
      table: {
        type: {
          summary: sizes,
        },
        defaultValue: {
          summary: 'sm',
        },
      },
      control: {
        type: 'select',
      },
    },
    globalColour: {
      options: colours,
      description:
        'The primary colour of icons globally. Can be changed by overriding the `--brand-icon-fill-primary` CSS variable.',
      name: 'Example of applying colour globally',
      table: {
        defaultValue: {
          summary: '--color-dandelion-yellow',
        },
      },
      control: {
        type: 'select',
      },
    },
    colour: {
      options: colours,
      description: 'The colour of a specific icon, using the `colour` input',
      name: 'Example of applying colour specifically to an icon (first)',
      table: {
        type: {
          summary: colours,
        },
        defaultValue: {
          summary: '--color-super-blue',
        },
      },
      control: {
        type: 'select',
      },
    },
    halfToneColour: {
      options: [
        '#333',
        '--color-poppy-red-dark',
        'rgb(0, 83, 128)',
        '--color-transparent',
      ],
      description:
        'The half tone (dots) colour of a specific icon, using the halfToneColour input',
      name: 'Example of applying half tone colour specifically to an icon (third one)',
      table: {
        type: {
          summary: 'string (if using a css variable only specify `--the-variable`)',
        },
      },
      control: {
        type: 'select',
      },
    },
    outlinesColour: {
      options: [ '#333', '--color-super-blue-darkest', 'rgb(0, 83, 128)' ],
      description:
        'The colour of the outlines of a specific icon, using the `outlinesColour` input',
      name: 'Example of applying outlines colour specifically to an icon (third one)',
      table: {
        type: {
          summary: 'string (if using a css variable only specify `--the-variable`)',
        },
      },
      control: {
        type: 'select',
      },
    },
  },
};

const exampleTemplate = `
<lg-brand-icon
  [name]="name"
  [size]="size"
  [colour]="colour"
  [halfToneColour]="halfToneColour"
  [outlinesColour]="outlinesColour"
></lg-brand-icon>
`;

const brandIconsTemplate: StoryFn<LgBrandIconComponent> = (
  args: LgBrandIconComponent,
) => ({
  props: args,
  template:
    '<lg-swatch-brand-icon [size]="size" [colour]="colour" [halfToneColour]="halfToneColour" [outlinesColour]="outlinesColour" [globalColour]="globalColour"></lg-swatch-brand-icon>',
});

export const standardBrandIcons = brandIconsTemplate.bind({});
standardBrandIcons.storyName = 'Catalog';

standardBrandIcons.args = {
  size: 'sm',
  colour: '--color-super-blue',
  halfToneColour: '--color-poppy-red-dark',
  outlinesColour: '--color-super-blue-darkest',
};

standardBrandIcons.parameters = {
  docs: {
    source: {
      code: exampleTemplate,
    },
  },
};

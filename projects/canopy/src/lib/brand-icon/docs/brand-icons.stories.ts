import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';
import { NgForOf } from '@angular/common';

import { BrandIconSize, LgBrandIconComponent } from '../brand-icon.component';
import { lgBrandIconsArray } from '../../brand-icons-files';

@Component({
  selector: 'lg-swatch-brand-icon',
  template: `
    <div class="swatch" *ngFor="let icon of lgBrandIconsArray; let i = index">
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
  imports: [ LgBrandIconComponent, NgForOf ],
})
class SwatchBrandIconComponent implements OnChanges {
  @Input() size: BrandIconSize;
  @Input() colour: string;
  @Input() halfToneColour: string;
  @Input() outlinesColour: string;
  @Input() globalColour: string;

  cssVar: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges({ globalColour }: SimpleChanges) {
    if (globalColour && globalColour.currentValue) {
      this.cssVar = this.sanitizer.bypassSecurityTrustStyle(
        `--brand-icon-fill-primary: var(${globalColour.currentValue})`,
      );
    }
  }

  protected readonly lgBrandIconsArray = lgBrandIconsArray;
}

const sizes = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' ];

const colours = [
  '--colour-yellow-600',
  '--colour-blue-600',
  '--colour-green-400',
  '--colour-red-400',
  '--colour-red-700',
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
          summary: '--colour-yellow-600',
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
          summary: '--colour-blue-600',
        },
      },
      control: {
        type: 'select',
      },
    },
    halfToneColour: {
      options: [
        '--colour-greyscale-900',
        '--colour-red-700',
        'rgb(0, 83, 128)',
        '--colour-transparent',
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
      options: [ '#333', '--colour-blue-900', 'rgb(0, 83, 128)' ],
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

export const StandardBrandIcons = {
  name: 'Catalog',
  render: (args: LgBrandIconComponent) => ({
    props: args,
    template:
      '<lg-swatch-brand-icon [size]="size" [colour]="colour" [halfToneColour]="halfToneColour" [outlinesColour]="outlinesColour" [globalColour]="globalColour"></lg-swatch-brand-icon>',
  }),
  args: {
    size: 'sm',
    colour: '--colour-blue-600',
    halfToneColour: '--colour-red-700',
    outlinesColour: '--colour-blue-900',
  },
  parameters: {
    docs: {
      source: {
        code: exampleTemplate,
      },
    },
  },
};

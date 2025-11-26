import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

import { LgIconComponent } from '../icon.component';
import { lgIconsArray } from '../../ui-icons-files';

@Component({
  selector: 'lg-swatch-icon',
  template: `
    @for (icon of lgIconsArray; track icon) {
      <div class="swatch">
        <lg-icon class="swatch__svg" [name]="icon.name" [attr.style]="colourVar" />
        <span class="swatch__name">{{ icon.name }}</span>
      </div>
    }
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
      }

      .swatch {
        margin: var(--space-4);
        flex: 1 1 225px;
      }

      .swatch__svg {
        margin-right: var(--space-5);
      }
    `,
  ],
  imports: [ LgIconComponent ],
})
class SwatchIconComponent implements OnChanges {
  private sanitizer = inject(DomSanitizer);

  @Input() colour: string;

  colourVar: SafeStyle;

  ngOnChanges({ colour }: SimpleChanges) {
    if (colour && colour.currentValue) {
      this.colourVar = this.sanitizer.bypassSecurityTrustStyle(
        `color: var(${colour.currentValue})`,
      );
    }
  }

  protected readonly lgIconsArray = lgIconsArray;
}

const colours = [
  '--colour-greyscale-900',
  '--colour-blue-600',
  '--colour-green-800',
  '--colour-red-700',
];

export default {
  title: 'Foundations/UI icon/Catalog',
  tags: [ 'pending' ],
  decorators: [
    moduleMetadata({
      imports: [ SwatchIconComponent, LgIconComponent ],
    }),
  ],
  argTypes: {
    colour: {
      options: colours,
      description: 'Example of changing the colour of the icon',
      control: {
        type: 'select',
      },
    },
  },
};

const exampleTemplate = `
<lg-icon name="call"></lg-icon>
`;

export const StandardIcons = {
  name: 'Catalog',
  render: (args: LgIconComponent) => ({
    props: args,
    template: '<lg-swatch-icon [colour]="colour"></lg-swatch-icon>',
  }),
  args: {
    colour: '--colour-greyscale-900',
  },
  parameters: {
    docs: {
      source: {
        code: exampleTemplate,
      },
    },
  },
};

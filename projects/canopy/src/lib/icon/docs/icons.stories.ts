import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';
import { NgForOf } from '@angular/common';

import { LgIconComponent } from '../icon.component';
import { lgIconsArray } from '../../ui-icons-files';

@Component({
  selector: 'lg-swatch-icon',
  template: `
    <div class="swatch" *ngFor="let icon of lgIconsArray">
      <lg-icon class="swatch__svg" [name]="icon.name" [attr.style]="colourVar"></lg-icon>
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
        margin: var(--space-sm);
        flex: 1 1 225px;
      }

      .swatch__svg {
        margin-right: var(--space-md);
      }
    `,
  ],
  standalone: true,
  imports: [ LgIconComponent, NgForOf ],
})
class SwatchIconComponent implements OnChanges {
  @Input() colour: string;

  colourVar: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {}

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
  '--color-charcoal',
  '--color-super-blue',
  '--color-leafy-green-dark',
  '--color-poppy-red-dark',
];

export default {
  title: 'Foundations/UI icon/Catalog',
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
    colour: '--color-charcoal',
  },
  parameters: {
    docs: {
      source: {
        code: exampleTemplate,
      },
    },
  },
};

import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';

import { LgPictogramComponent, PictogramSize } from '../pictogram.component';
// Direct import required for Webpack compatibility - do not use barrel file
import { lgPictogramsArray } from '../../pictogram-files/set/lgPictogramsArray';

@Component({
  selector: 'lg-swatch-pictogram',
  template: `
    @for (icon of lgPictogramsArray; track icon) {
      <div class="swatch">
        <lg-pictogram
          class="swatch__svg lg-theme-neutral"
          [name]="icon.name"
          [size]="size"
          [hasFill]="hasFill"
        />
        <span class="swatch__name">{{ icon.name }}</span>
      </div>
    }
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
      }

      .swatch {
        margin: var(--space-5);
        flex: 0 0 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .swatch__name {
        display: block;
        text-align: center;
        margin-top: auto;
        padding-top: var(--space-2);
        font-size: var(--text-base-size);
        word-break: break-word;
      }

      .swatch__svg {
        display: block;
      }
    `,
  ],
  imports: [ LgPictogramComponent, NgStyle ],
})
class SwatchPictogramComponent {
  @Input() size: PictogramSize | undefined;
  @Input() hasFill = false;

  protected readonly lgPictogramsArray = lgPictogramsArray;
}

const sizes = [ 'md', 'lg', 'xl' ];

export default {
  title: 'Foundations/Pictogram/Catalog',
  tags: [ 'updated' ],
  decorators: [
    moduleMetadata({
      imports: [ SwatchPictogramComponent, LgPictogramComponent ],
    }),
  ],
  argTypes: {
    hasFill: {
      description: 'Applies a fill to pictograms',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
      control: {
        type: 'boolean',
      },
    },
    size: {
      options: sizes,
      description: 'The size of the icon',
      table: {
        type: {
          summary: sizes,
        },
        defaultValue: {
          summary: 'md',
        },
      },
      control: {
        type: 'select',
      },
    },
  },
  globals: {
    backgrounds: { value: 'light' },
  },
};

const exampleTemplate = `
<lg-pictogram
  [hasFill]="hasFill"
  [name]="name"
  [size]="size"
></lg-pictogram>
`;

export const StandardPictograms = {
  name: 'Catalog',
  render: (args: LgPictogramComponent) => ({
    props: args,
    template: `
      <lg-swatch-pictogram
        [hasFill]="hasFill"
        [size]="size"
      ></lg-swatch-pictogram>
    `,
  }),
  args: {
    hasFill: false,
    size: 'md',
  },
  parameters: {
    docs: {
      source: {
        code: exampleTemplate,
      },
    },
  },
};

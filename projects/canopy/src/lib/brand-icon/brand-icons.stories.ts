import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { select, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgBrandIconComponent } from './brand-icon.component';
import { notes } from './brand-icon.notes';
import { LgBrandIconRegistry } from './brand-icon.registry';
import * as brandIconSet from './brand-icons.interface';

export const brandIconsArray: Array<brandIconSet.BrandIcon> = [
  brandIconSet.lgBrandIconSun,
  brandIconSet.lgBrandIconPiggyBank,
  brandIconSet.lgBrandIconCookiesAndArrows,
  brandIconSet.lgBrandIconErrorInBrowser,
  brandIconSet.lgBrandIconNoInformation,
  brandIconSet.lgBrandIconRainOrShine,
  brandIconSet.lgBrandIconPeople,
  brandIconSet.lgBrandIconCalendar,
  brandIconSet.lgBrandIconNoTransactionsMatch,
  brandIconSet.lgBrandIconPensionPot,
  brandIconSet.lgBrandIconPerformance,
  brandIconSet.lgBrandIconThumbsUp,
  brandIconSet.lgBrandIconVideoGuides,
  brandIconSet.lgBrandIconSurvey,
];

@Component({
  selector: 'lg-swatch-brand-icon',
  template: `
    <div class="swatch" *ngFor="let icon of icons">
      <lg-brand-icon
        class="swatch__svg"
        [name]="icon.name"
        [size]="size"
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
})
class SwatchBrandIconComponent implements OnChanges {
  @Input() size: string;
  @Input() colour: string;

  icons = brandIconsArray;
  cssVar: SafeStyle;

  constructor(private registry: LgBrandIconRegistry, private sanitizer: DomSanitizer) {
    this.registry.registerBrandIcon(this.icons);
  }

  ngOnChanges({ colour }: SimpleChanges) {
    if (colour && colour.currentValue) {
      this.cssVar = this.sanitizer.bypassSecurityTrustStyle(
        `--brand-icon-fill-primary: var(${colour.currentValue})`,
      );
    }
  }
}

const sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export default {
  title: 'Components/Brand Icon',
  excludeStories: ['brandIconsArray'],
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [SwatchBrandIconComponent, LgBrandIconComponent],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

const colours = [
  '--color-dandelion-yellow',
  '--color-super-blue',
  '--color-lily-green',
  '--color-shocking-pink',
];

export const standard = () => ({
  template: `
    <lg-swatch-brand-icon [size]="size" [colour]="colour"></lg-swatch-brand-icon>
  `,
  props: {
    size: select('size', sizes, 'xs'),
    colour: select('colour examples', colours, '--color-dandelion-yellow'),
  },
});

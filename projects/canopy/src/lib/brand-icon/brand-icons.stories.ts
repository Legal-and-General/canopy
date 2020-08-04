import { Component, Input } from '@angular/core';

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
      <lg-brand-icon class="swatch__svg" [name]="icon.name" [size]="size"></lg-brand-icon>
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
class SwatchBrandIconComponent {
  icons = brandIconsArray;

  @Input() size;

  constructor(private registry: LgBrandIconRegistry) {
    this.registry.registerBrandIcon(this.icons);
  }
}

const spaces = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

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

export const standard = () => ({
  template: `
    <lg-swatch-brand-icon [size]="size"></lg-swatch-brand-icon>
  `,
  props: {
    size: select('size', spaces, 'xs'),
  },
});

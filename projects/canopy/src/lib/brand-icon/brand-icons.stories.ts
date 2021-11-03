import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { moduleMetadata, Story } from '@storybook/angular';

import { LgBrandIconComponent } from './brand-icon.component';
import { notes } from './brand-icon.notes';
import { LgBrandIconRegistry } from './brand-icon.registry';

import * as brandIconSet from './brand-icons.interface';

const brandIconsArray: Array<brandIconSet.BrandIcon> = [
  brandIconSet.lgBrandIconCalendar,
  brandIconSet.lgBrandIconChangeExistingHoldings,
  brandIconSet.lgBrandIconChangeFutureContributions,
  brandIconSet.lgBrandIconCookiesAndArrows,
  brandIconSet.lgBrandIconErrorInBrowser,
  brandIconSet.lgBrandIconGuaranteedIncome,
  brandIconSet.lgBrandIconHelpAdvice,
  brandIconSet.lgBrandIconNoInformation,
  brandIconSet.lgBrandIconNoTransactionsMatch,
  brandIconSet.lgBrandIconPaymentSuccess,
  brandIconSet.lgBrandIconPensionPot,
  brandIconSet.lgBrandIconPeople,
  brandIconSet.lgBrandIconPerformance,
  brandIconSet.lgBrandIconPiggyBank,
  brandIconSet.lgBrandIconRainOrShine,
  brandIconSet.lgBrandIconSun,
  brandIconSet.lgBrandIconSurvey,
  brandIconSet.lgBrandIconThumbsUp,
  brandIconSet.lgBrandIconVideoGuides,
  brandIconSet.lgBrandIconWarning,
  brandIconSet.lgBrandIconMinutes,
  brandIconSet.lgBrandIconQuickAndEasy,
  brandIconSet.lgBrandIconHandFlower,
  brandIconSet.lgBrandIconCurrencyPounds,
  brandIconSet.lgBrandIconWindTurbine,
];
@Component({
  selector: 'lg-swatch-brand-icon',
  template: `
    <div class="swatch" *ngFor="let icon of icons; let i = index">
      <lg-brand-icon
        class="swatch__svg"
        [name]="icon.name"
        [size]="size"
        [colour]="i === 0 ? colour : null"
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
  @Input() globalColour: string;

  icons = brandIconsArray;
  cssVar: SafeStyle;

  constructor(private registry: LgBrandIconRegistry, private sanitizer: DomSanitizer) {
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

const sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

const colours = [
  '--color-dandelion-yellow',
  '--color-super-blue',
  '--color-lily-green',
  '--color-shocking-pink',
  '--color-poppy-red-dark',
];

export default {
  title: 'Components/Brand Icon',
  decorators: [
    moduleMetadata({
      declarations: [SwatchBrandIconComponent, LgBrandIconComponent],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
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
      table: {
        type: {
          summary: colours,
        },
        defaultValue: {
          summary: '--color-dandelion-yellow',
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
  [name]="sun"
  size="sm"
  colour="--color-dandelion-yellow"
></lg-brand-icon>
`;

const brandIconsTemplate: Story<LgBrandIconComponent> = (args: LgBrandIconComponent) => ({
  props: args,
  template:
    '<lg-swatch-brand-icon [size]="size" [colour]="colour" [globalColour]="globalColour"></lg-swatch-brand-icon>',
});

export const standardBrandIcons = brandIconsTemplate.bind({});
standardBrandIcons.storyName = 'Standard';
standardBrandIcons.args = {
  size: 'sm',
};
standardBrandIcons.parameters = {
  docs: {
    description: {
      component: notes,
    },
    source: {
      code: exampleTemplate,
    },
  },
};

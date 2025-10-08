import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata } from '@storybook/angular';

import typographyVariables from '../../../../../storybook/css-variables/typography';

import { getProductiveFontSizes, getExpressiveFontSizes } from './typography-utils';

// Generate font sizes dynamically from typography variables
const productiveFontSizes = getProductiveFontSizes(typographyVariables);
const expressiveFontSizes = getExpressiveFontSizes(typographyVariables);

@Component({
  selector: 'lg-display-font-size',
  template: `
    <div>
      <p [ngClass]="fontClass" class="lg-margin__bottom--xxxs">{{ textString }}</p>
      <div *ngIf="showSizeInfo" class="lg-margin__bottom--xl">
        <p class="lg-font-size-0-8--400 lg-margin__top--xs">
          SM > MD: {{ pxValues.sm }}px | {{ remValues.sm }}rem<br />
          LG > XXL: {{ pxValues.lg }}px | {{ remValues.lg }}rem
        </p>
      </div>
    </div>
  `,
  standalone: false,
})
class LgDisplayFontSizeComponent {
  @Input() textString: string;
  @Input() pxValues: { sm: string; lg?: string };
  @Input() remValues: { sm: string; lg?: string };
  @Input() fontClass: string;
  @Input() showSizeInfo = false;
}

@Component({
  selector: 'lg-font-sizes-panel',
  template: `
    <div class="font-panels">
      <div *ngIf="isProductiveFont" class="font-panels__panel">
        <p class="lg-font-size-4--300 font-panels__heading">Productive</p>
        <p class="lg-font-size-5--700 font-panels__subheading">Nunito Sans</p>
        <ng-container *ngFor="let fontGroup of productiveFontGroups">
          <ng-container *ngFor="let weight of fontGroup.weights; let last = last">
            <lg-display-font-size
              [textString]="getFontLabel(fontGroup.size, weight)"
              [pxValues]="fontGroup.px"
              [remValues]="fontGroup.rem"
              [fontClass]="'lg-font-size-' + fontGroup.size + '--' + weight"
              [showSizeInfo]="false"
            >
            </lg-display-font-size>

            <!-- Add underlined version of the last weight in each group -->
            <lg-display-font-size
              *ngIf="last && isLastWeightInGroup(fontGroup, weight)"
              [textString]="getFontLabel(fontGroup.size, weight, true)"
              [pxValues]="fontGroup.px"
              [remValues]="fontGroup.rem"
              [fontClass]="'lg-font-size-' + fontGroup.size + '--400' + ' lg-underline'"
              [showSizeInfo]="true"
              [ngClass]="{ 'lg-margin__bottom--none': true }"
            >
            </lg-display-font-size>
          </ng-container>
        </ng-container>
      </div>

      <div *ngIf="!isProductiveFont" class="font-panels__panel">
        <p class="lg-font-size-4--300 lg-font--expressive font-panels__heading">
          Expressive
        </p>
        <p class="lg-font-size-5--700 lg-font--expressive font-panels__subheading">
          ABC Otto
        </p>
        <ng-container *ngFor="let fontGroup of expressiveFontGroups">
          <ng-container
            *ngFor="let weight of fontGroup.weights; let i = index; let last = last"
          >
            <lg-display-font-size
              [textString]="getFontLabel(fontGroup.size, weight)"
              [pxValues]="fontGroup.px"
              [remValues]="fontGroup.rem"
              [fontClass]="
                'lg-font-size-' +
                fontGroup.size +
                '--' +
                weight +
                ' ' +
                'lg-font--expressive'
              "
              [showSizeInfo]="false"
            >
            </lg-display-font-size>

            <!-- Add underlined version of the last weight in each group -->
            <lg-display-font-size
              *ngIf="i === fontGroup.weights.length - 1"
              [textString]="getFontLabel(fontGroup.size, weight, true)"
              [pxValues]="fontGroup.px"
              [remValues]="fontGroup.rem"
              [fontClass]="
                'lg-font-size-' +
                fontGroup.size +
                '--400' +
                ' ' +
                'lg-font--expressive' +
                ' lg-underline'
              "
              [showSizeInfo]="true"
              [ngClass]="{ 'lg-margin__bottom--none': true }"
            >
            </lg-display-font-size>
          </ng-container>
        </ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      .font-panels {
        display: flex;
        margin-top: var(--space-lg);
        border: 4px solid #edeae8;
        border-radius: var(--border-radius-lg);
        padding: var(--space-sm);
      }
      .font-panels__heading {
        margin-bottom: 0;
      }
      .font-panels__subheading {
        margin-bottom: var(--space-lg);
      }
    `,
  ],
  standalone: false,
})
class LgFontPanelComponent {
  @Input() isProductiveFont: boolean;
  productiveFontGroups = productiveFontSizes;
  expressiveFontGroups = expressiveFontSizes;

  isLastWeightInGroup(fontGroup: any, weight: string): boolean {
    return fontGroup.weights[fontGroup.weights.length - 1] === weight;
  }

  getFontLabel(size: string, weight: string, isUnderline = false): string {
    const cssVarName = `--font-size-${size}`;
    const underlineText = 'underline';

    if (isUnderline) {
      return `${cssVarName}/${underlineText}`;
    }

    return `${cssVarName}/${weight}`;
  }
}

export default {
  title: 'Foundations/Typography',
  decorators: [
    moduleMetadata({
      declarations: [ LgDisplayFontSizeComponent, LgFontPanelComponent ],
      imports: [],
    }),
  ],
  // !dev tag removes a story/component from the sidebar (See: https://github.com/storybookjs/storybook/pull/26634)
  tags: [ '!dev' ],
} as Meta;

const typographyTemplate = `
<lg-font-sizes-panel [isProductiveFont]="isProductiveFont"></lg-font-sizes-panel>
`;

export const Productive = {
  name: '[Hidden] Productive',
  render: (args: LgDisplayFontSizeComponent) => ({
    props: args,
    template: typographyTemplate,
  }),
  args: {
    isProductiveFont: true,
  },
};

export const Expressive = {
  name: '[Hidden] Expressive',
  render: (args: LgDisplayFontSizeComponent) => ({
    props: args,
    template: typographyTemplate,
  }),
  args: {
    isProductiveFont: false,
  },
};

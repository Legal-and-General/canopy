import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

const pangram = 'The five boxing wizards jump quickly';

const availableFontSizesRoboto = [
  { size: '7', px: { sm: '52', lg: '56' } },
  { size: '6', px: { sm: '44', lg: '48' } },
  { size: '5', px: { sm: '36', lg: '40' } },
  { size: '4', px: { sm: '28', lg: '32' } },
  { size: '3', px: { sm: '24' } },
  { size: '2', px: { sm: '20' } },
  { size: '1', px: { sm: '16' } },
  { size: '0-8', px: { sm: '14' } },
  { size: '0-6', px: { sm: '13' } },
];
const availableFontSizesLyon = [
  { size: '7', px: { sm: '52', lg: '56' } },
  { size: '6', px: { sm: '44', lg: '48' } },
  { size: '5', px: { sm: '36', lg: '40' } },
  { size: '4', px: { sm: '28', lg: '32' } },
];

@Component({
  selector: 'lg-display-font-size',
  template: `
    <div lgMarginBottom="xxl">
      <p [ngClass]="fontClass" lgMarginBottom="none">{{ textString }}</p>
      <pre>{{ classString }}</pre>
      <pre *ngIf="pxValues?.lg; else px">sm > md: {{ pxValues.sm }}px</pre>
      <pre *ngIf="pxValues?.lg">lg > xxl: {{ pxValues.lg }}px</pre>
    </div>

    <ng-template #px>sm > xxl: {{ pxValues?.sm }}px</ng-template>
  `,
})
class LgDisplayFontSizeComponent {
  @Input() textString: string;
  @Input() classString: string;
  @Input() pxValues: { sm: string; lg: string };
  @Input() fontClass: string;
}
@Component({
  selector: 'lg-font-sizes-panel',
  template: `
    <div class="font-panels">
      <div *ngIf="isProductiveFont" class="font-panels__panel">
        <ng-container *ngFor="let font of fontSizesRoboto">
          <lg-display-font-size
            textString="{{ textString }}"
            classString=".lg-font-size-{{ font.size }}"
            [pxValues]="font.px"
            fontClass="lg-font-size-{{ font.size }}"
          >
          </lg-display-font-size>
          <lg-display-font-size
            *ngIf="font.size === '1' || font.size === '2' || font.size === '3'"
            textString="{{ textString }}"
            classString=".lg-font-size-{{ font.size }}--medium"
            [pxValues]="font.px"
            fontClass="lg-font-size-{{ font.size }}--medium"
          >
          </lg-display-font-size>
          <lg-display-font-size
            *ngIf="font.size !== '0-8' && font.size !== '0-6'"
            textString="{{ textString }}"
            classString=".lg-font-size-{{ font.size }}--strong"
            [pxValues]="font.px"
            fontClass="lg-font-size-{{ font.size }}--strong"
          >
          </lg-display-font-size>
        </ng-container>
      </div>
      <div *ngIf="!isProductiveFont" class="font-panels__panel">
        <ng-container *ngFor="let font of fontSizesLyon">
          <lg-display-font-size
            textString="{{ textString }}"
            classString=".lg-font-size-{{ font.size }}"
            [pxValues]="font.px"
            fontClass="lg-font-size-{{ font.size }} lg-font--expressive"
          >
          </lg-display-font-size>
          <lg-display-font-size
            textString="{{ textString }}"
            classString=".lg-font-size-{{ font.size }}--strong"
            [pxValues]="font.px"
            fontClass="lg-font-size-{{ font.size }}--strong lg-font--expressive"
          >
          </lg-display-font-size>
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
    `,
  ],
})
class LgFontPanelComponent {
  @Input() isProductiveFont: boolean;
  textString = pangram;
  fontSizesRoboto = availableFontSizesRoboto;
  fontSizesLyon = availableFontSizesLyon;
}

export default {
  title: 'Internal Typography',
  decorators: [
    moduleMetadata({
      declarations: [ LgDisplayFontSizeComponent, LgFontPanelComponent ],
      imports: [],
    }),
  ],
} as Meta;

const typographyTemplate = `
<lg-font-sizes-panel [isProductiveFont]="isProductiveFont"></lg-font-sizes-panel>
`;

const productiveStory: Story = args => ({
  props: args,
  template: typographyTemplate,
});

export const productive: Story = productiveStory.bind({});
productive.storyName = 'Productive';

productive.args = {
  isProductiveFont: true,
};

const expressiveStory: Story = args => ({
  props: args,
  template: typographyTemplate,
});

export const expressive: Story = expressiveStory.bind({});
expressive.storyName = 'Expressive';

expressive.args = {
  isProductiveFont: false,
};

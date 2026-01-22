import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import convert, { RGB } from 'color-convert';
import coloursVariables from '@lib/storybook/css-variables/tokens/variables';

interface Color {
  name: string;
  rgb: string;
  hex: string;
  background: string;
}

@Component({
  selector: 'lg-tint-swatch',
  template: `
    @for (color of colors; track color) {
      <div class="tint-swatch__item">
        <div class="tint-swatch__details">
          <strong class="tint-swatch__name">{{ color.name }}</strong>
        </div>
        <div
          #swatch
          class="tint-swatch__color"
          [ngStyle]="{ background: color.background }"
        ></div>
      </div>
    }
  `,
  styles: [
    `
      :host {
        margin-right: var(--component-margin);
        margin-bottom: var(--component-margin);
        border: solid var(--border-width) var(--border-color);
        border-radius: var(--border-radius-sm);
        display: inline-block;
        width: 30rem;
      }
      .tint-swatch__item {
        display: flex;
      }
      .tint-swatch__details {
        padding: var(--space-4);
        flex: 1 1 50%;
      }
      .tint-swatch__color {
        width: 14rem;
        display: inline-block;
        flex: 1 1 50%;
      }
    `,
  ],
  standalone: false,
})
class TintSwatchComponent implements AfterViewInit {
  colors: Array<Color>;

  @HostBinding('class') class = 'tint-swatch';

  @ViewChildren('swatch') swatches: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.swatches.forEach((swatch, i) => {
      const styles = window.getComputedStyle(swatch.nativeElement);

      this.colors[i].rgb = styles.backgroundColor;

      this.colors[i].hex = convert.rgb.hex(
        styles.backgroundColor.match(/\d+/g).map(e => +e) as RGB,
      );
    });
  }

  @Input()
  set names(filterName: string) {
    this.colors = Object.keys(coloursVariables)
      .filter(name => name.includes(filterName) && !name.includes('rgb'))
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] ?? '0', 10);
        const numB = parseInt(b.match(/\d+/)?.[0] ?? '0', 10);

        return numA - numB;
      })
      .map(name => ({
        name,
        rgb: null,
        hex: null,
        background: `var(${name})`,
      }));
  }
}

export default {
  title: 'Foundations/Colours',
  decorators: [
    moduleMetadata({
      declarations: [ TintSwatchComponent ],
    }),
  ],
  // !dev tag removes a story/component from the sidebar (See: https://github.com/storybookjs/storybook/pull/26634)
  tags: [ '!dev' ],
} as Meta;

const foundationsColoursTemplate = `
<div>
  <div>
    <lg-tint-swatch
      names="colour-blue">
    </lg-tint-swatch>
    <lg-tint-swatch
      names="colour-green">
    </lg-tint-swatch>
    <lg-tint-swatch
      names="colour-greyscale">
    </lg-tint-swatch>
    <lg-tint-swatch
      names="colour-red">
    </lg-tint-swatch>
    <lg-tint-swatch
      names="colour-yellow">
    </lg-tint-swatch>
  </div>
</div>
`;

export const TintsColours = {
  name: '[Hidden] Tints',
  render: (args: TintSwatchComponent) => ({
    props: args,
    template: foundationsColoursTemplate,
  }),
};

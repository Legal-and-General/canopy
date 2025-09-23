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

interface Color {
  name: string;
  rgb: string;
  hex: string;
  background: string;
}

@Component({
  selector: 'lg-tint-swatch',
  template: `
    <div *ngFor="let color of colors" class="tint-swatch__item">
      <div class="tint-swatch__details">
        <strong class="tint-swatch__name">{{ color.name }}</strong>
      </div>
      <div
        #swatch
        class="tint-swatch__color"
        [ngStyle]="{ background: color.background }"
      ></div>
    </div>
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
        padding: var(--space-sm);
        flex: 1 1 50%;
      }
      .tint-swatch__color {
        width: 14rem;
        display: inline-block;
        flex: 1 1 50%;
      }
      .tint-swatch__text {
        display: block;
        margin-bottom: var(--space-xxxs);
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
  set names(names: string) {
    this.colors = names.split(',').map(name => ({
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
      names="--colour-blue-0, --colour-blue-100,--colour-blue-200,--colour-blue-300,--colour-blue-400, --colour-blue-500, --colour-blue-600, --colour-blue-700, --colour-blue-800, --colour-blue-900, --colour-blue-1000">
    </lg-tint-swatch>
    <lg-tint-swatch
      names="--colour-green-0, --colour-green-100,--colour-green-200,--colour-green-300,--colour-green-400, --colour-green-500, --colour-green-600, --colour-green-700, --colour-green-800, --colour-green-900, --colour-green-1000">
    </lg-tint-swatch>
    <lg-tint-swatch
      names="--colour-greyscale-0, --colour-greyscale-100,--colour-greyscale-200,--colour-greyscale-300,--colour-greyscale-400, --colour-greyscale-500, --colour-greyscale-600, --colour-greyscale-700, --colour-greyscale-800, --colour-greyscale-900, --colour-greyscale-1000">
    </lg-tint-swatch>
    <lg-tint-swatch
      names="--colour-red-0, --colour-red-100,--colour-red-200,--colour-red-300,--colour-red-400, --colour-red-500, --colour-red-600, --colour-red-700, --colour-red-800, --colour-red-900, --colour-red-1000">
    </lg-tint-swatch>
    <lg-tint-swatch
      names="--colour-yellow-0, --colour-yellow-100,--colour-yellow-200,--colour-yellow-300,--colour-yellow-400, --colour-yellow-500, --colour-yellow-600, --colour-yellow-700, --colour-yellow-800, --colour-yellow-900, --colour-yellow-1000">
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

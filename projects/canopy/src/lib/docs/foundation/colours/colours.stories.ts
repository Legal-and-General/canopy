import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  QueryList,
  ViewChild,
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
  selector: 'lg-swatch',
  template: `
    <div #swatch class="swatch__color" [ngStyle]="{ background: color.background }"></div>
    <div class="swatch__details">
      <span class="swatch__name">{{ color.name }}</span>
      <span class="swatch__text lg-font-size-0-6">#{{ color.hex }}</span>
      <span class="swatch__text lg-font-size-0-6">{{ color.rgb }}</span>
    </div>
  `,
  styles: [
    `
      :host {
        margin-top: var(--space-md);
        margin-right: var(--space-sm);
        margin-bottom: var(--component-margin);
        border: solid var(--border-width) var(--border-color);
        border-radius: var(--border-radius-sm);
        display: inline-block;
      }
      .swatch__details {
        padding: var(--space-sm);
      }
      .swatch__color {
        width: 14rem;
        height: 10rem;
      }
      .swatch__name {
        display: block;
        font-weight: var(--font-weight-medium);
        margin-bottom: var(--space-xxxs);
      }
      .swatch__text {
        display: block;
        margin-bottom: var(--space-xxxs);
      }
    `,
  ],
})
class SwatchComponent implements AfterViewInit {
  @HostBinding('class') class = 'swatch';

  @ViewChild('swatch') swatch;

  @Input()
  color: Color;

  @Input()
  set name(val: string) {
    this.color = {
      name: val,
      background: `var(${val})`,
      rgb: null,
      hex: null,
    };
  }
  get name() {
    return this.color.name;
  }

  ngAfterViewInit() {
    const styles = window.getComputedStyle(this.swatch.nativeElement);

    this.color.rgb = styles.backgroundColor;

    this.color.hex = convert.rgb.hex(
      styles.backgroundColor.match(/\d+/g).map(e => +e) as RGB,
    );
  }
}

@Component({
  selector: 'lg-tint-swatch',
  template: `
    <div *ngFor="let color of colors" class="tint-swatch__item">
      <div class="tint-swatch__details">
        <strong class="tint-swatch__name">{{ color.name }}</strong>
        <span class="tint-swatch__text lg-font-size-0-6">#{{ color.hex }}</span>
        <span class="tint-swatch__text lg-font-size-0-6">{{ color.rgb }}</span>
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
      declarations: [ SwatchComponent, TintSwatchComponent ],
    }),
  ],
  // !dev tag removes a story/component from the sidebar (See: https://github.com/storybookjs/storybook/pull/26634)
  tags: [ '!dev' ],
} as Meta;

const coreColoursTemplate = `
<div>
  <lg-swatch name="--color-super-blue"></lg-swatch>
  <lg-swatch name="--color-leafy-green"></lg-swatch>
  <lg-swatch name="--color-dandelion-yellow"></lg-swatch>
  <lg-swatch name="--color-poppy-red"></lg-swatch>
</div>
`;

const secondaryColoursTemplate = `
<div>
  <div>
    <lg-swatch name="--color-lavender"></lg-swatch>
    <lg-swatch name="--color-sky-blue"></lg-swatch>
    <lg-swatch name="--color-midnight-blue"></lg-swatch>
  </div>
  <div>
    <lg-swatch name="--color-tea-green"></lg-swatch>
    <lg-swatch name="--color-lily-green"></lg-swatch>
    <lg-swatch name="--color-mexican-green"></lg-swatch>
  </div>
  <div>
    <lg-swatch name="--color-champagne"></lg-swatch>
    <lg-swatch name="--color-harvest-gold"></lg-swatch>
    <lg-swatch name="--color-earth-brown"></lg-swatch>
  </div>
  <div>
    <lg-swatch name="--color-dusky-pink"></lg-swatch>
    <lg-swatch name="--color-shocking-pink"></lg-swatch>
    <lg-swatch name="--color-terracotta"></lg-swatch>
  </div>
</div>
`;

const greyscaleColoursTemplate = `
<div>
  <lg-swatch name="--color-black"></lg-swatch>
  <lg-swatch name="--color-charcoal"></lg-swatch>
  <lg-swatch name="--color-battleship-grey"></lg-swatch>
  <lg-swatch name="--color-taupe-grey"></lg-swatch>
  <lg-swatch name="--color-platinum"></lg-swatch>
  <lg-swatch name="--color-white-smoke"></lg-swatch>
  <lg-swatch name="--color-white"></lg-swatch>
</div>
`;

const tintsColoursTemplate = `
<div>
  <div>
    <lg-tint-swatch
      names="--color-super-blue-lightest,--color-super-blue-light,--color-super-blue-dark,--color-super-blue-darkest">
    </lg-tint-swatch>
    <lg-tint-swatch
      names="--color-leafy-green-lightest,--color-leafy-green-light,--color-leafy-green-dark,--color-leafy-green-darkest">
    </lg-tint-swatch>
    <lg-tint-swatch
      names="--color-dandelion-yellow-lightest,--color-dandelion-yellow-light">
    </lg-tint-swatch>
    <lg-tint-swatch
      names="--color-earth-brown-dark,--color-earth-brown-darkest">
    </lg-tint-swatch>
    <lg-tint-swatch
      names="--color-poppy-red-lightest,--color-poppy-red-light,--color-poppy-red-dark,--color-poppy-red-darkest">
    </lg-tint-swatch>
  </div>
</div>
`;

export const CoreColours = {
  name: '[Hidden] Core',
  render: (args: SwatchComponent) => ({
    props: args,
    template: coreColoursTemplate,
  }),
};

export const SecondaryColours = {
  name: '[Hidden] Secondary',
  render: (args: SwatchComponent) => ({
    props: args,
    template: secondaryColoursTemplate,
  }),
};

export const GreyscaleColours = {
  name: '[Hidden] Greyscale',
  render: (args: SwatchComponent) => ({
    props: args,
    template: greyscaleColoursTemplate,
  }),
};

export const TintsColours = {
  name: '[Hidden] Tints',
  render: (args: TintSwatchComponent) => ({
    props: args,
    template: tintsColoursTemplate,
  }),
};

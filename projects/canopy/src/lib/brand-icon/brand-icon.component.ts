import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

import { LgBrandIconRegistry } from './brand-icon.registry';
import { BrandIconName } from './brand-icons.interface';

type Name = BrandIconName;

let nextUniqueId = 0;

export type BrandIconSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

@Component({
  selector: 'lg-brand-icon',
  templateUrl: './brand-icon.component.html',
  styleUrls: ['./brand-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgBrandIconComponent {
  private svgElement: SVGElement;
  private id = nextUniqueId++;

  @HostBinding('class.lg-brand-icon') class = true;
  @HostBinding('attr.aria-hidden') hidden = true;

  @Input()
  set colour(colour: string) {
    const el = this.hostElement.nativeElement.querySelector(
      '[data-colour="lg-icon-fill-primary"]',
    );
    el.style.fill = `var(${colour})`;
  }

  _size: BrandIconSize = 'sm';
  @Input()
  set size(size: BrandIconSize) {
    if (this._size) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-brand-icon--${this.size}`,
      );
    }
    this.renderer.addClass(this.hostElement.nativeElement, `lg-brand-icon--${size}`);
    this._size = size;
  }
  get size() {
    return this._size;
  }

  @Input()
  set name(name: Name) {
    if (this.svgElement) {
      this.hostElement.nativeElement.removeChild(this.svgElement);
    }
    const svgData = this.setSVGAttributes(this.iconRegistry.getBrandIcon(name));
    this.svgElement = this.svgElementFromString(svgData);
    this.hostElement.nativeElement.appendChild(this.svgElement);
  }

  constructor(
    private iconRegistry: LgBrandIconRegistry,
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private hostElement: ElementRef,
  ) {
    this.renderer.addClass(
      this.hostElement.nativeElement,
      `lg-brand-icon--${this._size}`,
    );
  }

  /*
   * The following code replaces the ID and the xlink:href of the SVG before adding it to the registry.
   * This is a workaround to handle a bug where all the SVG brand icons created in sketch and icomoon
   * have the same ID causing multiple SVGs on a page to link to that same ID and displaying an
   * incorrect brand-icon.
   */
  private setSVGAttributes(svgData: string): string {
    let idCount = 0;
    let xlinkCount = 0;

    return (
      svgData
        // Changes the lg-icon-fill-primary id to be a data attribute to avoid issues with duplicated ids.
        .replace(/id="lg-icon-fill-primary"/g, () => 'data-colour="lg-icon-fill-primary"')
        .replace(/id="([^"]+)"/g, () => `id="lg-brand-icon-${this.id}-${idCount++}"`)
        .replace(
          /xlink:href="#\w+"/g,
          () => `xlink:href="#lg-brand-icon-${this.id}-${xlinkCount++}"`,
        )
    );
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('div');
    div.innerHTML = svgContent;

    return div.querySelector('svg');
  }
}

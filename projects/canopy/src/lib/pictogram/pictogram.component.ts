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

import { LgPictogramRegistry } from './pictogram.registry';
import { PictogramName } from './pictograms.interface';

type Name = PictogramName;

let nextUniqueId = 0;

export type PictogramSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

@Component({
  selector: 'lg-pictogram',
  templateUrl: './pictogram.component.html',
  styleUrls: ['./pictogram.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgPictogramComponent {
  private svgPictogram: SVGElement;
  private id = nextUniqueId++;

  @HostBinding('class.lg-pictogram') class = true;
  @HostBinding('attr.aria-hidden') hidden = true;

  _size: PictogramSize = 'sm';
  @Input()
  set size(size: PictogramSize) {
    if (this._size) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-pictogram--${this.size}`,
      );
    }
    this.renderer.addClass(this.hostElement.nativeElement, `lg-pictogram--${size}`);
    this._size = size;
  }
  get size() {
    return this._size;
  }

  @Input()
  set name(name: Name) {
    if (this.svgPictogram) {
      this.elementRef.nativeElement.removeChild(this.svgPictogram);
    }
    const svgData = this.setSVGAttributes(this.iconRegistry.getPictogram(name));
    this.svgPictogram = this.svgElementFromString(svgData);
    this.elementRef.nativeElement.appendChild(this.svgPictogram);
  }

  constructor(
    private elementRef: ElementRef,
    private iconRegistry: LgPictogramRegistry,
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private hostElement: ElementRef,
  ) {
    this.renderer.addClass(this.hostElement.nativeElement, `lg-pictogram--${this._size}`);
  }

  /*
   * The following code replaces the ID and the xlink:href of the SVG before adding it to the registry.
   * This is a workaround to handle a bug where all the SVG pictograms created in sketch and icomoon
   * have the same ID causing multiple SVGs on a page to link to that same ID and displaying an
   * incorrect pictogram.
   */
  private setSVGAttributes(svgData: string): string {
    return svgData
      .replace(/id="\w+"/g, () => `id="lg-pictogram-${this.id}"`)
      .replace(/xlink:href="#\w+"/g, () => `xlink:href="#lg-pictogram-${this.id}"`);
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('div');
    div.innerHTML = svgContent;

    return div.querySelector('svg');
  }
}

import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { LgPictogramRegistry } from './pictogram.registry';
import { PictogramName } from './pictogram-files.interface';

type Name = PictogramName;

let nextUniqueId = 0;

export type PictogramSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

@Component({
  selector: 'lg-pictogram',
  templateUrl: './pictogram.component.html',
  styleUrls: [ './pictogram.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  host: { ngSkipHydration: 'true' },
})
export class LgPictogramComponent {
  private iconRegistry = inject(LgPictogramRegistry);
  private document = inject<Document>(DOCUMENT);
  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);

  private svgElement: SVGElement;
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
  set colour(colour: string) {
    const hostElement = this.hostElement.nativeElement;

    if (colour) {
      hostElement.style.setProperty('--lg-pictogram-colour', colour);
    } else {
      hostElement.style.removeProperty('--lg-pictogram-colour');
    }
  }

  @Input()
  set name(name: Name) {
    (async () => {
      if (this.svgElement) {
        this.hostElement.nativeElement.removeChild(this.svgElement);
      }

      const svgData = this.setSVGAttributes(await this.iconRegistry.get(name));

      if (svgData) {
        this.svgElement = this.svgElementFromString(svgData);
        this.hostElement.nativeElement.appendChild(this.svgElement);
      } else {
        console.error(
          `[Canopy] Pictogram "${name}" cannot be found. ` +
            'Please check the pictogram catalog for the full list of available pictograms: ' +
            'https://legal-and-general.github.io/canopy/?path=/story/foundations-pictogram-catalog--standard-pictograms',
        );
      }
    })();
  }

  constructor() {
    this.renderer.addClass(this.hostElement.nativeElement, `lg-pictogram--${this._size}`);
  }

  /*
   * The following code replaces the ID and the xlink:href of the SVG before adding it to the registry.
   * This is a workaround to handle a bug where all the SVG pictograms created in sketch and icomoon
   * have the same ID causing multiple SVGs on a page to link to that same ID and displaying an
   * incorrect pictogram.
   *
   * Also replaces inline fill attributes with data attributes to enable CSS-based theme control.
   */
  private setSVGAttributes(svgData: string): string {
    let idCount = 0;
    let xlinkCount = 0;

    return svgData
      ?.replace(/fill="#42aeea"/g, 'data-colour="content-pictogram-fill"')
      .replace(/fill="#1d1d1b"/gi, 'data-colour="content-pictogram-outline"')
      .replace(
        /id="(?:lg-icon-fill-primary|content-pictogram-fill)"/g,
        () => 'data-colour="content-pictogram-fill"',
      )
      .replace(
        /id="(?:Outlines|content-pictogram-outline)"/g,
        () => 'data-colour="content-pictogram-outline"',
      )
      .replace(/id="([^"]+)"/g, () => `id="lg-pictogram-${this.id}-${idCount++}"`)
      .replace(
        /xlink:href="#\w+"/g,
        () => `xlink:href="#lg-pictogram-${this.id}-${xlinkCount++}"`,
      );
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('div');

    div.innerHTML = svgContent;

    return div.querySelector('svg');
  }
}

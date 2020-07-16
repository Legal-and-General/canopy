import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { LgIconRegistry } from './icon.registry';
import { IconName } from './icons.interface';

type Name = IconName;

let nextUniqueId = 0;

@Component({
  selector: 'lg-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgIconComponent {
  private svgIcon: SVGElement;
  private id = nextUniqueId++;

  @HostBinding('class.lg-icon') class = true;
  @HostBinding('attr.aria-hidden') hidden = true;

  @Input()
  set name(name: Name) {
    if (this.svgIcon) {
      this.elementRef.nativeElement.removeChild(this.svgIcon);
    }

    const svgData = this.setSVGAttributes(this.iconRegistry.getIcon(name));
    this.svgIcon = this.svgElementFromString(svgData);
    this.elementRef.nativeElement.appendChild(this.svgIcon);
  }

  constructor(
    private elementRef: ElementRef,
    private iconRegistry: LgIconRegistry,
    @Inject(DOCUMENT) private document: any,
  ) {}

  /*
   * The following code replaces the ID and the xlink:href of the SVG before adding it to the registry.
   * This is a workaround to handle a bug where all the SVG icons created in sketch and icomoon
   * have the same ID causing multiple SVGs on a page to link to that same ID and displaying an
   * incorrect icon.
   */
  private setSVGAttributes(svgData: string): string {
    return svgData
      .replace(/id="\w+"/g, () => `id="lg-icon-${this.id}"`)
      .replace(/xlink:href="#\w+"/g, () => `xlink:href="#lg-icon-${this.id}"`);
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('div');
    div.innerHTML = svgContent;

    return div.querySelector('svg');
  }
}

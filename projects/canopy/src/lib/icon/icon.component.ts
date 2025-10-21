import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { LgIconRegistry } from './icon.registry';
import { IconName } from './ui-icons-files.interface';

type Name = IconName;

let nextUniqueId = 0;

@Component({
  selector: 'lg-icon',
  templateUrl: './icon.component.html',
  styleUrls: [ './icon.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  host: { ngSkipHydration: 'true' },
})
export class LgIconComponent {
  private hostElement = inject(ElementRef);
  private iconRegistry = inject(LgIconRegistry);
  private document = inject<Document>(DOCUMENT);

  private svgIcon: SVGElement;
  private id = nextUniqueId++;

  @HostBinding('class.lg-icon') class = true;
  @HostBinding('attr.aria-hidden') hidden = true;

  @Input()
  set name(name: Name) {
    (async () => {
      if (this.svgIcon) {
        this.hostElement.nativeElement.removeChild(this.svgIcon);
      }

      const svgData = this.setSVGAttributes(await this.iconRegistry.get(name));

      if (svgData) {
        this.svgIcon = this.svgElementFromString(svgData);
        this.hostElement.nativeElement.appendChild(this.svgIcon);
      }
    })();
  }

  /*
   * The following code replaces the ID and the xlink:href of the SVG before adding it to the registry.
   * This is a workaround to handle a bug where all the SVG icons created in sketch and icomoon
   * have the same ID causing multiple SVGs on a page to link to that same ID and displaying an
   * incorrect icon.
   */
  private setSVGAttributes(svgData: string): string {
    return svgData
      ?.replace(/id="\w+"/g, () => `id="lg-icon-${this.id}"`)
      .replace(/xlink:href="#\w+"/g, () => `xlink:href="#lg-icon-${this.id}"`);
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('div');

    div.innerHTML = svgContent;

    return div.querySelector('svg');
  }
}

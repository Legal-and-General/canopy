import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { LgFlagIconRegistry } from './flag-icon.registry';
import { FlagIconName } from './flag-icons-files.interface';

type Name = FlagIconName;

let nextUniqueId = 0;

@Component({
  selector: 'lg-flag-icon',
  templateUrl: './flag-icon.component.html',
  styleUrls: [ './flag-icon.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  host: { ngSkipHydration: 'true' },
})
export class LgFlagIconComponent {
  private hostElement = inject(ElementRef);
  private flagIconRegistry = inject(LgFlagIconRegistry);
  private document = inject<Document>(DOCUMENT);

  private svgIcon: SVGElement;
  private id = nextUniqueId++;

  @HostBinding('class.lg-flag-icon') class = true;
  @HostBinding('attr.aria-hidden') hidden = true;

  @Input()
  set name(name: Name) {
    (async () => {
      if (this.svgIcon) {
        this.hostElement.nativeElement.removeChild(this.svgIcon);
      }

      const svgData = this.setSVGAttributes(await this.flagIconRegistry.get(name));

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
      ?.replace(/id="\w+"/g, () => `id="lg-flag-icon-${this.id}"`)
      .replace(/xlink:href="#\w+"/g, () => `xlink:href="#lg-flag-icon-${this.id}"`);
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('div');

    div.innerHTML = svgContent;

    return div.querySelector('svg');
  }
}

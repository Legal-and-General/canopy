import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { randomUniqueId } from '../utils';
import type { Status } from '../status';
import { StatusClassService } from '../status/status-class.service';

import { LgPictogramRegistry } from './pictogram.registry';
import { PictogramName } from './pictogram-files.interface';

type Name = PictogramName;

export type PictogramSize = 'md' | 'lg' | 'xl';

@Component({
  selector: 'lg-pictogram',
  templateUrl: './pictogram.component.html',
  styleUrls: [ './pictogram.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  host: {
    ngSkipHydration: 'true',
    class: 'lg-pictogram',
    'aria-hidden': 'true',
    '[attr.data-has-fill]': 'dataHasFill',
  },
  providers: [ StatusClassService ],
})
export class LgPictogramComponent {
  private iconRegistry = inject(LgPictogramRegistry);
  private document = inject<Document>(DOCUMENT);
  private renderer = inject(Renderer2);
  private hostElement = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly statusClassService = inject(StatusClassService);

  private svgElement?: SVGElement;
  private id = randomUniqueId();
  private _hasFill = false;
  private _status?: Exclude<Status, 'generic'>;
  private appliedStatusClasses: Array<string> = [];

  @Input()
  set status(status: Exclude<Status, 'generic'> | undefined) {
    this._status = status;

    if (status === undefined) {
      this.statusClassService.removeStatusClasses(
        this.renderer,
        this.hostElement.nativeElement,
        this.appliedStatusClasses,
      );

      this.appliedStatusClasses = [];

      return;
    }

    const host = this.hostElement.nativeElement;
    const classesToApply = [ `lg-status-${status}`, 'lg-theme-neutral' ];
    const callerOwnedClasses = classesToApply.filter(
      className =>
        !this.appliedStatusClasses.includes(className) &&
        host.classList.contains(className),
    );

    this.appliedStatusClasses = this.statusClassService
      .applyStatusClasses(
        this.renderer,
        host,
        status,
        'neutral',
        this.appliedStatusClasses,
      )
      .filter(className => !callerOwnedClasses.includes(className));
  }
  get status(): Exclude<Status, 'generic'> | undefined {
    return this._status;
  }

  dataHasFill = false;
  @Input()
  set hasFill(value: boolean) {
    this._hasFill = value;

    this.updateFill();
  }
  get hasFill(): boolean {
    return this._hasFill;
  }

  _size: PictogramSize = 'md';
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
        const svgElement = this.svgElementFromString(svgData);

        if (svgElement) {
          this.svgElement = svgElement;
          this.hostElement.nativeElement.appendChild(svgElement);
        }
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

    this.hostElement.nativeElement.style.setProperty(
      '--lg-pictogram-fill-colour',
      'none',
    );
  }

  private updateFill(): void {
    this.dataHasFill = this._hasFill;
    const host = this.hostElement.nativeElement;

    if (this.dataHasFill) {
      host.style.removeProperty('--lg-pictogram-fill-colour');
    } else {
      host.style.setProperty('--lg-pictogram-fill-colour', 'none');
    }
  }

  /*
   * The following code replaces the ID and the xlink:href of the SVG before adding it to the registry.
   * This is a workaround to handle a bug where all the SVG pictograms created in sketch and icomoon
   * have the same ID causing multiple SVGs on a page to link to that same ID and displaying an
   * incorrect pictogram.
   *
   * Also converts named Figma layer IDs to data attributes to enable CSS-based theme control.
   */
  private setSVGAttributes(svgData: string | undefined): string | undefined {
    let idCount = 0;
    let xlinkCount = 0;

    return svgData
      ?.replace(
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

  private svgElementFromString(svgContent: string): SVGElement | null {
    const div = this.document.createElement('div');

    div.innerHTML = svgContent;

    return div.querySelector('svg');
  }
}

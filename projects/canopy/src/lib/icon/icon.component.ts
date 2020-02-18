import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { LgIconRegistry } from './icon.registry';
import { IconName } from './icons.interface';

type Name = IconName;

@Component({
  selector: 'lg-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgIconComponent {
  private _svgIcon: SVGElement;

  @HostBinding('class.lg-icon') class = true;
  @HostBinding('attr.aria-hidden') hidden = true;

  @Input()
  set name(name: Name) {
    if (this._svgIcon) {
      this.elementRef.nativeElement.removeChild(this._svgIcon);
    }

    const svgData = this.iconRegistry.getIcon(name);
    this._svgIcon = this.svgElementFromString(svgData);
    this.elementRef.nativeElement.appendChild(this._svgIcon);
  }

  constructor(
    private domSanitizer: DomSanitizer,
    private elementRef: ElementRef,
    private iconRegistry: LgIconRegistry,
    @Inject(DOCUMENT) private document: any
  ) {}

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('div');
    div.innerHTML = svgContent;

    return div.querySelector('svg');
  }
}

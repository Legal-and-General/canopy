import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import {
  LgGridColDirective,
  LgGridRowDirective,
  LgGridContainerDirective,
} from '../grid';

import type { BannerVariant } from './banner-variant.interface';

@Component({
  selector: 'lg-banner',
  templateUrl: './banner.component.html',
  styleUrls: [ './banner.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-banner',
  },
  imports: [ LgGridContainerDirective, LgGridRowDirective, LgGridColDirective ],
})
export class LgBannerComponent {
  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);

  private _variant: BannerVariant;

  @Input()
  set variant(variant: BannerVariant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-banner-variant--${this._variant}`,
      );
    }

    this.renderer.addClass(
      this.hostElement.nativeElement,
      `lg-banner-variant--${variant}`,
    );

    this._variant = variant;
  }
  get variant() {
    return this._variant;
  }

  @HostBinding('attr.role') get role(): string {
    if (this.variant !== 'generic') {
      return 'alert';
    }
  }

  constructor() {
    this.variant = 'generic';
  }
}

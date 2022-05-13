import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

import type { PromoCardVariant } from '../promo-card.interface';

@Component({
  selector: 'lg-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: [ './promo-card.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class LgPromoCardComponent {
  private _variant: PromoCardVariant;

  @HostBinding('class.lg-promo-card') class = true;

  @Input()
  set variant(variant: PromoCardVariant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-promo-card--${this.variant}`,
      );
    }

    this.renderer.addClass(this.hostElement.nativeElement, `lg-promo-card--${variant}`);
    this._variant = variant;
  }
  get variant() {
    return this._variant;
  }

  constructor(private renderer: Renderer2, public hostElement: ElementRef) {
    this.variant = 'solid-white';
  }
}

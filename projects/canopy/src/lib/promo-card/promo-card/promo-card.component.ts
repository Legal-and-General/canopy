import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import type { PromoCardVariant } from '../promo-card.interface';

@Component({
  selector: 'lg-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: [ './promo-card.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class LgPromoCardComponent {
  private renderer = inject(Renderer2);
  private _variant: PromoCardVariant;

  hostElement = inject(ElementRef);

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

  constructor() {
    this.variant = 'solid-white';
  }
}

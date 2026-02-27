import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation,
  ViewChild,
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
export class LgPromoCardComponent implements AfterViewInit {
  private renderer = inject(Renderer2);
  private _variant: PromoCardVariant;

  hostElement = inject(ElementRef);
  @ViewChild('contentInner', { read: ElementRef }) contentInner: ElementRef;

  @HostBinding('class.lg-promo-card') class = true;

  @Input()
  set variant(variant: PromoCardVariant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-promo-card--${this.variant}`,
      );

      if (this._variant === 'solid-green' && this.contentInner) {
        this.renderer.removeClass(this.contentInner.nativeElement, 'lg-mode-green');
        this.renderer.removeClass(this.contentInner.nativeElement, 'lg-theme-bold');
      }
    }

    this.renderer.addClass(this.hostElement.nativeElement, `lg-promo-card--${variant}`);
    this._variant = variant;

    // Apply green classes if view has been initialized
    this.applyGreenClasses();
  }
  get variant() {
    return this._variant;
  }

  constructor() {
    this.variant = 'solid-white';
  }

  ngAfterViewInit() {
    // Apply green classes after view initialization
    this.applyGreenClasses();
  }

  private applyGreenClasses() {
    if (this._variant === 'solid-green' && this.contentInner) {
      this.renderer.addClass(this.contentInner.nativeElement, 'lg-mode-green');
      this.renderer.addClass(this.contentInner.nativeElement, 'lg-theme-bold');
    }
  }
}

import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

import type { SeparatorVariant } from './separator.interface';

@Component({
  selector: 'lg-separator',
  template: '',
  styleUrls: [ './separator.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class LgSeparatorComponent {
  private _variant: SeparatorVariant;

  @Input() hasRole: boolean;
  @Input()
  set variant(variant: SeparatorVariant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-separator--${this.variant}`,
      );
    }

    this.renderer.addClass(this.hostElement.nativeElement, `lg-separator--${variant}`);
    this._variant = variant;
  }
  get variant() {
    return this._variant;
  }

  @HostBinding('class.lg-separator') class = true;

  @HostBinding('attr.role') get roleAttr() {
    return this.hasRole
      ? 'separator'
      : null;
  }

  @HostBinding('attr.aria-hidden') get ariaHidden() {
    return !this.hasRole || null;
  }

  constructor(private renderer: Renderer2, public hostElement: ElementRef) {
    this.variant = 'solid';
  }
}

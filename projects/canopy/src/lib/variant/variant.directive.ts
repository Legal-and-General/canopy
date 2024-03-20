import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import type { Variant } from './variant.interface';

@Directive({
  selector: '[lgVariant]',
  standalone: true,
})
export class LgVariantDirective {
  variantClass: string;
  @Input()
  set lgVariant(variant: Variant) {
    this.variantClass = this.toggleClass(`lg-variant--${variant}`, this.variantClass);
  }

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
  ) {}

  toggleClass(newClass: string, oldClass: string): string {
    if (oldClass) {
      this.renderer.removeClass(this.hostElement.nativeElement, oldClass);
    }

    this.renderer.addClass(this.hostElement.nativeElement, newClass);

    return newClass;
  }
}

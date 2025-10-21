import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

import type { Variant } from './variant.interface';

@Directive({
  selector: '[lgVariant]',
  standalone: true,
})
export class LgVariantDirective {
  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);

  variantClass: string;
  @Input()
  set lgVariant(variant: Variant) {
    this.variantClass = this.toggleClass(`lg-variant--${variant}`, this.variantClass);
  }

  toggleClass(newClass: string, oldClass: string): string {
    if (oldClass) {
      this.renderer.removeClass(this.hostElement.nativeElement, oldClass);
    }

    this.renderer.addClass(this.hostElement.nativeElement, newClass);

    return newClass;
  }
}

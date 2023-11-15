import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import type { Variant } from './variant.interface';

@Directive({
  selector: '[lgVariant]',
})
export class LgVariantDirective {
  themeClass: string;
  fgClass: string;
  @Input()
  set lgVariant(variant: Variant) {
    const variantArr = variant.split('--');
    const theme = variantArr[0];
    const fg = variantArr[1];

    this.themeClass = this.toggleClass(`lg-variant-${theme}`, this.themeClass);
    this.fgClass = this.toggleClass(`lg-variant-${theme}--${fg}`, this.fgClass);
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

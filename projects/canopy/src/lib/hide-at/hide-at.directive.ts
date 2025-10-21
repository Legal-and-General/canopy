import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

import type { Breakpoints } from '../shared/breakpoints.interface';

@Directive({
  selector: '[lgHideAt]',
  standalone: true,
})
export class LgHideAtDirective {
  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);

  responsiveUtilClass: string;

  @Input()
  set lgHideAt(breakpoint: Breakpoints) {
    if (!breakpoint) {
      return;
    }

    this.responsiveUtilClass = this.toggleClass(
      `lg-hide-at--${breakpoint}`,
      this.responsiveUtilClass,
    );
  }

  toggleClass(newClass: string, oldClass: string): string {
    if (oldClass) {
      this.renderer.removeClass(this.hostElement.nativeElement, oldClass);
    }

    this.renderer.addClass(this.hostElement.nativeElement, newClass);

    return newClass;
  }
}

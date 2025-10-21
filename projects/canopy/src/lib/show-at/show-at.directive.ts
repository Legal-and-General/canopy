import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

import type { Breakpoints } from '../shared/breakpoints.interface';

@Directive({
  selector: '[lgShowAt]',
  standalone: true,
})
export class LgShowAtDirective {
  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);

  responsiveUtilClass: string;

  @Input()
  set lgShowAt(breakpoint: Breakpoints) {
    if (!breakpoint) {
      return;
    }

    this.responsiveUtilClass = this.toggleClass(
      `lg-show-at--${breakpoint}`,
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

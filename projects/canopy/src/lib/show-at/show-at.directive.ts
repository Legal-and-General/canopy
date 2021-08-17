import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import type { Breakpoints } from '../shared/breakpoints.interface';

@Directive({
  selector: '[lgShowAt]',
})
export class LgShowAtDirective {
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

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}
}

import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { SpacingVariant } from '../spacing.interface';

@Directive({
  selector: '[lgRowGap]',
  standalone: true,
})
export class LgRowGapDirective {
  private readonly classPrefix = 'lg-row-gap--';
  private readonly defaultGap = 'sm';

  lgRowGapClass = `${this.classPrefix}${this.defaultGap}`;

  @Input()
  set lgRowGap(gap: SpacingVariant) {
    const newClass = `${this.classPrefix}${gap || this.defaultGap}`;

    this.lgRowGapClass = this.toggleClass(newClass, this.lgRowGapClass);
  }

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
  ) {}

  private toggleClass(newClass: string, oldClass: string): string {
    this.renderer.removeClass(this.hostElement.nativeElement, oldClass);
    this.renderer.addClass(this.hostElement.nativeElement, newClass);

    return newClass;
  }
}

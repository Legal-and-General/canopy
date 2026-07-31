import { Directive, ElementRef, HostBinding, Input, inject } from '@angular/core';

import { randomUniqueId } from '../utils';

@Directive({
  selector: '[lgSuffix]',
  standalone: true,
})
export class LgSuffixDirective {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  @Input()
  @HostBinding('attr.id')
  id = `lg-suffix-${randomUniqueId()}`;

  get hostElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }
}

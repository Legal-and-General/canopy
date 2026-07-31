import { Directive, ElementRef, HostBinding, Input, inject } from '@angular/core';

import { randomUniqueId } from '../utils';

@Directive({
  selector: '[lgPrefix]',
  standalone: true,
})
export class LgPrefixDirective {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  @Input()
  @HostBinding('attr.id')
  id = `lg-prefix-${randomUniqueId()}`;

  get hostElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }
}

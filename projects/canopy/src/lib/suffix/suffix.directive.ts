import { Directive, HostBinding, Input } from '@angular/core';

let nextUniqueId = 0;

@Directive({
  selector: '[lgSuffix]',
})
export class LgSuffixDirective {
  @Input()
  @HostBinding('attr.id')
  id = `lg-suffix-${nextUniqueId++}`;

  /**
   * - the suffix can be targeted or not by the input's aria-describedBy attribute
   * - it is useful for cases where the suffix is applied upon focusable elements
   * - and it should be `false` for cases where the suffix is only text to be trully accessible
   */
  @Input()
  ariaDescribeInput = false;
}

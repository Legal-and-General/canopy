import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[lgFocus]',
})
export class LgFocusDirective implements OnChanges {
  @Input() lgFocus: boolean;

  constructor(private el: ElementRef) {}

  ngOnChanges({ lgFocus }: SimpleChanges) {
    if (lgFocus.currentValue) {
      const el = this.el.nativeElement as HTMLElement;

      el.focus();
    }
  }
}

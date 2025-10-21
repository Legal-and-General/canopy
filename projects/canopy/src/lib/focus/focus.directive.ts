import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';

@Directive({
  selector: '[lgFocus]',
  standalone: true,
})
export class LgFocusDirective implements OnChanges {
  private el = inject(ElementRef);

  @Input() lgFocus: boolean;

  ngOnChanges({ lgFocus }: SimpleChanges) {
    if (lgFocus.currentValue) {
      const el = this.el.nativeElement as HTMLElement;

      el.focus();
    }
  }
}

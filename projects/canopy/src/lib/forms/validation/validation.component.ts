import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

import type { Variant } from '../../variant';

let nextUniqueId = 0;

@Component({
  selector: 'lg-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgValidationComponent {
  @HostBinding('class.lg-validation')
  class = true;

  @Input() showIcon = true;

  _variant: Variant = null;
  @Input()
  set variant(variant: Variant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-variant--${this._variant}`,
      );
    }
    this.renderer.addClass(this.hostElement.nativeElement, `lg-variant--${variant}`);
    this._variant = variant;
  }
  get variant() {
    return this._variant;
  }

  @HostBinding('id')
  @Input()
  id = `lg-validation-${nextUniqueId++}`;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
    this.variant = 'error';
  }
}

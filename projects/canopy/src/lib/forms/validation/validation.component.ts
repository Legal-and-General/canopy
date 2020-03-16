import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';

import { ValidationVariant } from './validation';

let nextUniqueId = 0;

@Component({
  selector: 'lg-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgValidationComponent {
  @HostBinding('class.lg-validation')
  class = true;

  @Input() showIcon = true;

  _variant: ValidationVariant = 'error';
  @Input()
  set variant(variant: ValidationVariant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-validation--${this._variant}`
      );
    }
    this.renderer.addClass(
      this.hostElement.nativeElement,
      `lg-validation--${variant}`
    );
    this._variant = variant;
  }
  get variant() {
    return this._variant;
  }

  @HostBinding('id')
  @Input()
  id = `lg-validation-${nextUniqueId++}`;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}
}

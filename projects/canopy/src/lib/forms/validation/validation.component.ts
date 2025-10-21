import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

import type { Variant } from '../../variant';
import { LgIconComponent } from '../../icon';

let nextUniqueId = 0;

@Component({
  selector: 'lg-validation',
  templateUrl: './validation.component.html',
  styleUrls: [ './validation.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  imports: [ NgIf, NgSwitch, NgSwitchCase, LgIconComponent ],
})
export class LgValidationComponent {
  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);

  private _variant: Variant;

  @Input() showIcon = true;
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

  @HostBinding('class.lg-validation') class = true;

  constructor() {
    this.variant = 'error';
  }
}

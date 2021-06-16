import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

import { Variant } from '../variant/variant.interface';

@Component({
  selector: 'lg-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgAlertComponent {
  @HostBinding('class.lg-alert') class = true;

  @Input() showIcon = true;

  private _variant: Variant;
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

  @HostBinding('attr.role') get role(): string {
    if (this.variant !== Variant.Info && this.variant !== Variant.Generic) {
      return 'alert';
    }
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
    this.variant = Variant.Generic;
  }
}

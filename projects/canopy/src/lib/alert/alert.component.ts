import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

import type { Variant } from '../variant/variant.interface';

@Component({
  selector: 'lg-alert',
  templateUrl: './alert.component.html',
  styleUrls: [ './alert.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class LgAlertComponent {
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
    this.setRole();
  }
  get variant() {
    return this._variant;
  }

  @HostBinding('class.lg-alert') class = true;
  @HostBinding('attr.role') _role: string;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
  ) {
    this.variant = 'generic';
  }

  @Input() set role(role: string) {
    this._role = role;
  }
  private setRole() {
    if (!this._role) {
      if (this.variant !== 'info' && this.variant !== 'generic') {
        this._role = 'alert';
      }
    }
  }
}

import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

import { AlertVariant } from './alert.interface';

@Component({
  selector: 'lg-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgAlertComponent {
  @HostBinding('class.lg-alert') class = true;

  @Input() showIcon = true;

  _variant: AlertVariant;
  @Input()
  set variant(variant: AlertVariant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-alert--${this._variant}`,
      );
    }
    this.renderer.addClass(
      this.hostElement.nativeElement,
      `lg-alert--${variant}`,
    );
    this._variant = variant;
  }
  get variant() {
    return this._variant;
  }

  @HostBinding('attr.role') get role(): string {
    if (this.variant !== 'info' && this.variant !== 'generic') {
      return 'alert';
    }
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
    this.variant = 'generic';
  }
}

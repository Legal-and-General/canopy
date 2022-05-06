import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

import type { ButtonVariant, ButtonIconPosition, ButtonSize } from './button.interface';

@Component({
  selector: '[lg-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgButtonComponent {
  @HostBinding('class.lg-btn') class = true;

  _variant: ButtonVariant;
  @Input()
  set variant(variant: ButtonVariant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-btn--${this.variant}`,
      );
    }
    this.renderer.addClass(this.hostElement.nativeElement, `lg-btn--${variant}`);
    this._variant = variant;
  }
  get variant() {
    return this._variant;
  }

  @Input() loading = false;

  @HostBinding('attr.disabled') get disabledAttr() {
    return this.loading || this.disabled ? '' : null;
  }

  @Input() disabled = false;

  @HostBinding('class.lg-btn--loading') get loadingClass() {
    return this.loading;
  }

  @Input() fullWidth = false;
  @HostBinding('class.lg-btn--block') get fullWidthClass() {
    return this.fullWidth;
  }

  @Input() iconPosition: ButtonIconPosition;
  @HostBinding('class.lg-btn--icon-left') get leftIconClass() {
    return this.iconPosition === 'left';
  }

  @Input() iconButton = false;
  @HostBinding('class.lg-btn--icon-only') get iconButtonClass() {
    return this.iconButton;
  }

  @Input() size: ButtonSize;
  @HostBinding('class.lg-btn--sm') get sizeClass() {
    return this.size === 'sm';
  }

  constructor(private renderer: Renderer2, public hostElement: ElementRef) {
    this.variant = 'primary-dark';
    this.iconPosition = 'right';
    this.size = 'md';
  }
}

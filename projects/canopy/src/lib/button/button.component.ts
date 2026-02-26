import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { LgIconComponent } from '../icon';
import type { IconName } from '../icon/ui-icons-files.interface';
import { LgMarginDirective } from '../spacing';
import { LgSpinnerComponent } from '../spinner';

import type { ButtonPriority } from './button.interface';

@Component({
  selector: '[lg-button]',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  imports: [ NgTemplateOutlet, LgSpinnerComponent, LgMarginDirective, LgIconComponent ],
})
export class LgButtonComponent implements OnInit {
  private renderer = inject(Renderer2);
  private readonly hostElement = inject(ElementRef);
  private _leftIcon = false;
  private _rightIcon: IconName | null = null;

  @HostBinding('class.lg-btn') class = true;

  _variant: ButtonPriority;
  @Input()
  set variant(variant: ButtonPriority) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-btn--${this.variant}`,
      );
    }

    this.renderer.addClass(this.hostElement.nativeElement, `lg-btn--${variant}`);
    this._variant = variant;
  }
  get variant(): ButtonPriority {
    return this._variant;
  }

  @Input() loading = false;

  @HostBinding('attr.disabled') get disabledAttr(): string {
    return this.loading || this.disabled
      ? ''
      : null;
  }

  @Input() disabled = false;

  @HostBinding('class.lg-btn--loading') get loadingClass(): boolean {
    return this.loading;
  }

  @Input() fullWidth = false;
  @HostBinding('class.lg-btn--block') get fullWidthClass(): boolean {
    return this.fullWidth;
  }

  @Input()
  set leftIcon(value: boolean) {
    this._leftIcon = value;
  }
  get leftIcon(): boolean {
    return this._leftIcon;
  }

  @HostBinding('class.lg-btn--icon-left') get leftIconClass(): boolean {
    return this._leftIcon;
  }

  @Input()
  set rightIcon(value: IconName | null) {
    this._rightIcon = value;
  }
  get rightIcon(): IconName | null {
    return this._rightIcon;
  }

  get hasIcon(): boolean {
    return this._leftIcon || this._rightIcon !== null;
  }

  @Input() iconButton = false;
  @HostBinding('class.lg-btn--icon-only') get iconButtonClass(): boolean {
    return this.iconButton;
  }

  constructor() {
    this.variant = 'primary';
  }

  ngOnInit(): void {
    // Validate that both leftIcon and rightIcon are not set at the same time
    if (this._leftIcon && this._rightIcon) {
      console.error(
        'Button component error: Cannot have both leftIcon and rightIcon set at the same time. Left icon takes precedence.',
      );

      // Left icon takes precedence, so clear the right icon
      this._rightIcon = null;
    }
  }
}

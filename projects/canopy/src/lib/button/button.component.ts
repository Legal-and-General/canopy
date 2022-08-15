import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  HostBinding,
  Input,
  QueryList,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

import { LgIconComponent } from '../icon';

import type { ButtonIconPosition, ButtonSize, ButtonVariant } from './button.interface';

@Component({
  selector: '[lg-button]',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class LgButtonComponent implements AfterViewInit {
  @HostBinding('class.lg-btn') class = true;

  @ContentChildren(forwardRef(() => LgIconComponent), {
    descendants: true,
  })
  icons: QueryList<LgIconComponent>;

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
  get variant(): ButtonVariant {
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

  @Input() iconPosition: ButtonIconPosition;
  @HostBinding('class.lg-btn--icon-left') get leftIconClass(): boolean {
    return this.iconPosition === 'left';
  }

  @Input() iconButton = false;
  @HostBinding('class.lg-btn--icon-only') get iconButtonClass(): boolean {
    return this.iconButton;
  }

  @Input() size: ButtonSize;
  @HostBinding('class.lg-btn--sm') get sizeClass(): boolean {
    return this.size === 'sm';
  }

  constructor(private renderer: Renderer2, public hostElement: ElementRef) {
    this.variant = 'primary-dark';
    this.iconPosition = 'right';
    this.size = 'md';
  }

  ngAfterViewInit(): void {
    if (this.icons.length === 2) {
      // console.log(this.icons.get(0));
      // console.log(this.icons.get(0)['hostElement']);
      const firstIcon = this.icons.get(0)['hostElement'].nativeElement as HTMLElement;

      this.renderer.addClass(firstIcon, 'lg-margin__left--none');
      this.renderer.addClass(firstIcon, 'lg-margin__right--xxs');

      if (this.iconPosition === 'left') {
        console.warn(
          '`iconPosition` cannot be set to `left` when two icons are present. The property is ignored',
        );

        this.iconPosition = 'right';
      }
    }
  }
}

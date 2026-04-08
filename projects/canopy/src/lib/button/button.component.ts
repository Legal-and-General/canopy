import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  Input,
  QueryList,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { LgIconComponent } from '../icon';
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
export class LgButtonComponent implements AfterContentInit, AfterViewInit {
  private renderer = inject(Renderer2);
  private readonly hostElement = inject(ElementRef);
  private _backIcon = false;

  @ContentChildren(LgIconComponent) projectedIcons: QueryList<LgIconComponent>;

  @HostBinding('class.lg-btn') class = true;

  _priority: ButtonPriority;
  @Input()
  set priority(priority: ButtonPriority) {
    if (this._priority) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-btn--${this.priority}`,
      );
    }

    this.renderer.addClass(this.hostElement.nativeElement, `lg-btn--${priority}`);
    this._priority = priority;
  }
  get priority(): ButtonPriority {
    return this._priority;
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
  set backIcon(value: boolean) {
    this._backIcon = value;
  }
  get backIcon(): boolean {
    return this._backIcon;
  }

  @HostBinding('class.lg-btn--icon-left') get leftIconClass(): boolean {
    return this._backIcon;
  }

  @Input() iconButton = false;
  @HostBinding('class.lg-btn--icon-only') get iconButtonClass(): boolean {
    return this.iconButton;
  }

  constructor() {
    this.priority = 'primary';
  }

  ngAfterContentInit(): void {
    // Check if backIcon is set and there are projected lg-icon components
    if (this._backIcon && this.projectedIcons && this.projectedIcons.length > 0) {
      console.error(
        'Button component error: Cannot have both backIcon and a right icon set at the same time. Back icon takes precedence.',
      );
    }
  }

  ngAfterViewInit(): void {
    const icons = this.hostElement.nativeElement.getElementsByTagName(
      'lg-icon',
    ) as HTMLCollectionOf<HTMLElement>;

    if (this._backIcon && icons.length > 1) {
      // Back icon takes precedence, so remove any other icons
      for (let i = icons.length - 1; i > 0; i--) {
        icons[i].remove();
      }
    }
  }
}

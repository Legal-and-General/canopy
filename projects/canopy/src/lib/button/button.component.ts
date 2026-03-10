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
  private _leftIcon = false;

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
  set leftIcon(value: boolean) {
    this._leftIcon = value;
  }
  get leftIcon(): boolean {
    return this._leftIcon;
  }

  @HostBinding('class.lg-btn--icon-left') get leftIconClass(): boolean {
    return this._leftIcon;
  }

  @Input() iconButton = false;
  @HostBinding('class.lg-btn--icon-only') get iconButtonClass(): boolean {
    return this.iconButton;
  }

  constructor() {
    this.priority = 'primary';
  }

  ngAfterContentInit(): void {
    // Check if leftIcon is set and there are projected lg-icon components
    if (this._leftIcon && this.projectedIcons && this.projectedIcons.length > 0) {
      console.error(
        'Button component error: Cannot have both leftIcon and a right icon set at the same time. Left icon takes precedence.',
      );
    }
  }

  ngAfterViewInit(): void {
    const icons = this.hostElement.nativeElement.getElementsByTagName(
      'lg-icon',
    ) as HTMLCollectionOf<HTMLElement>;

    if (this._leftIcon && icons.length > 1) {
      // Left icon takes precedence, so remove any other icons
      for (let i = icons.length - 1; i > 0; i--) {
        icons[i].remove();
      }
    }
  }
}

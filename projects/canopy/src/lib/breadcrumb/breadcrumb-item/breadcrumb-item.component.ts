import {
  Component,
  ElementRef,
  HostBinding,
  Renderer2,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';

import * as iconSet from '../../icon/icons.interface';
import { BreadcrumbVariant } from './breadcrumb-item.interface';

export enum BreadcrumbBreakpoints {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

@Component({
  selector: 'lg-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgBreadcrumbItemComponent {
  @HostBinding('class.lg-breadcrumb-item') class = true;

  @Input() showItemAt: BreadcrumbBreakpoints = BreadcrumbBreakpoints.Medium;

  breadcrumbBreakpoints = BreadcrumbBreakpoints;

  icons = iconSet;

  index: number;

  set variant(variant: BreadcrumbVariant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-breadcrumb-item--${this.variant}`,
      );
    }
    this.renderer.addClass(
      this.hostElement.nativeElement,
      `lg-breadcrumb-item--${variant}`,
    );
    this._variant = variant;
  }

  get variant() {
    return this._variant;
  }

  set showBackChevron(showBackChevron: boolean) {
    this._showBackChevron = showBackChevron;

    this.cd.detectChanges();
  }

  get showBackChevron() {
    return this._showBackChevron;
  }

  set showForwardChevron(showForwardChevron: boolean) {
    this._showForwardChevron = showForwardChevron;

    this.cd.detectChanges();
  }

  get showForwardChevron() {
    return this._showForwardChevron;
  }

  private _variant: BreadcrumbVariant;

  private _showBackChevron = false;

  private _showForwardChevron = false;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private cd: ChangeDetectorRef,
  ) {}
}

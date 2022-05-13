import {
  Component,
  ElementRef,
  HostBinding,
  Renderer2,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

import * as iconSet from '../../icon/icons.interface';

import { BreadcrumbVariant } from './breadcrumb-item.interface';

@Component({
  selector: 'lg-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: [ './breadcrumb-item.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgBreadcrumbItemComponent {
  private _variant: BreadcrumbVariant;
  private _showBackChevron = false;
  private _showForwardChevron = false;
  private _isSmScreenFeaturedItem = false;
  private _hideIcons = false;
  icons = iconSet;
  index: number;

  @HostBinding('class.lg-breadcrumb-item') class = true;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private cd: ChangeDetectorRef,
  ) {}

  set hideIcons(hideIcons: boolean) {
    this._hideIcons = hideIcons;

    this.cd.detectChanges();
  }
  get hideIcons() {
    return this._hideIcons;
  }

  set isSmScreenFeaturedItem(isSmScreenFeaturedItem: boolean) {
    this._isSmScreenFeaturedItem = isSmScreenFeaturedItem;

    this.cd.detectChanges();
  }
  get isSmScreenFeaturedItem() {
    return this._isSmScreenFeaturedItem;
  }

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
}

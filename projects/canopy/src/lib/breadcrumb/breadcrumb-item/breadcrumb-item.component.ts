import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { NgClass } from '@angular/common';

import { LgIconComponent } from '../../icon';

@Component({
  selector: 'lg-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: [ './breadcrumb-item.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ NgClass, LgIconComponent ],
})
export class LgBreadcrumbItemComponent {
  private cd = inject(ChangeDetectorRef);

  private _showBackChevron = false;
  private _showForwardChevron = false;
  private _isSmScreenFeaturedItem = false;
  private _hideIcons = false;
  private _isCurrentPage = false;
  index: number;

  @HostBinding('class.lg-breadcrumb-item') class = true;

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

  @HostBinding('attr.aria-current') get ariaCurrent(): string | null {
    return this._isCurrentPage
      ? 'page'
      : null;
  }

  set isCurrentPage(isCurrentPage: boolean) {
    this._isCurrentPage = isCurrentPage;

    this.cd.detectChanges();
  }
  get isCurrentPage() {
    return this._isCurrentPage;
  }
}

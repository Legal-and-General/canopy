import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import * as iconSet from '../../icon/icons.interface';
import { BreadcrumbVariant } from './breadcrumb-item.interface';

@Component({
  selector: 'lg-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgBreadcrumbItemComponent {
  @HostBinding('class.lg-breadcrumb-item') class = true;

  @HostBinding('class.lg-breadcrumb-item--sm-screen-visible-item')
  get smScreenFeaturedItemControl() {
    return this.isSmScreenFeaturedItem;
  }

  @HostBinding('class.lg-breadcrumb-item--hide-content-icon')
  get customItemControl() {
    return this.hideCustomIcons;
  }

  hideCustomIcons = false;

  icons = iconSet;

  index: number;

  isSmScreenFeaturedItem = false;

  showBackIcon = false;

  showForwardIcon = false;

  set variant(variant: BreadcrumbVariant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-breadcrumb-item--${this.variant}`
      );
    }
    this.renderer.addClass(
      this.hostElement.nativeElement,
      `lg-breadcrumb-item--${variant}`
    );
    this._variant = variant;
  }

  get variant() {
    return this._variant;
  }

  private _variant: BreadcrumbVariant;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}
}

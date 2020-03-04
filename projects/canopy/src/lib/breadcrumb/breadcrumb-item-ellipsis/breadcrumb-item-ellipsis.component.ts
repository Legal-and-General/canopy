import {
  Component,
  ElementRef,
  HostBinding,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import { BreadcrumbVariant } from '../breadcrumb-item/breadcrumb-item.interface';

@Component({
  selector: 'lg-breadcrumb-item-ellipsis',
  templateUrl: './breadcrumb-item-ellipsis.component.html',
  styleUrls: ['./breadcrumb-item-ellipsis.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgBreadcrumbItemEllipsisComponent {
  @HostBinding('class.lg-breadcrumb-item-ellipsis') class = true;

  set variant(variant: BreadcrumbVariant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-breadcrumb-item-ellipsis--${this.variant}`
      );
    }
    this.renderer.addClass(
      this.hostElement.nativeElement,
      `lg-breadcrumb-item-ellipsis--${variant}`
    );
    this._variant = variant;
  }

  get variant() {
    return this._variant;
  }

  private _variant: BreadcrumbVariant;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}
}

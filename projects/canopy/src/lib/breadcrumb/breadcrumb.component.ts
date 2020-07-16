import {
  AfterContentInit,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  Input,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { LgBreadcrumbItemEllipsisComponent } from './breadcrumb-item-ellipsis/breadcrumb-item-ellipsis.component';
import { LgBreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbVariant } from './breadcrumb-item/breadcrumb-item.interface';

@Component({
  selector: 'lg-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgBreadcrumbComponent implements AfterContentInit {
  @HostBinding('class.lg-breadcrumb') class = true;

  @HostBinding('attr.aria-label') attr = 'breadcrumb';

  @HostBinding('attr.role') role = 'navigation';

  @ContentChildren(forwardRef(() => LgBreadcrumbItemComponent), {
    descendants: true,
  })
  crumbs: QueryList<LgBreadcrumbItemComponent>;

  @ContentChildren(forwardRef(() => LgBreadcrumbItemEllipsisComponent), {
    descendants: true,
  })
  ellipsis: QueryList<LgBreadcrumbItemEllipsisComponent>;

  @Input() set variant(variant: BreadcrumbVariant) {
    this._variant = variant;

    if (this.contentHasInit) {
      this.setVariantOnChildren();
    }
  }

  get variant(): BreadcrumbVariant {
    return this._variant;
  }

  private _variant = BreadcrumbVariant.dark;

  private contentHasInit = false;

  ngAfterContentInit() {
    this.setVariantOnChildren();
    this.setCrumbProperties();

    this.contentHasInit = true;
  }

  private setVariantOnChildren() {
    this.crumbs.forEach(crumb => (crumb.variant = this.variant));
    this.ellipsis.forEach(ellipsisItem => (ellipsisItem.variant = this.variant));
  }

  private setCrumbProperties() {
    this.crumbs.forEach((crumb, index) => {
      const totalCrumbCount = this.crumbs.length;

      crumb.index = index;

      crumb.hideIcons = totalCrumbCount === 2 && !index;

      crumb.showBackChevron = totalCrumbCount > 1;

      crumb.showForwardChevron = index + 1 !== totalCrumbCount;

      crumb.isSmScreenFeaturedItem =
        (!index && totalCrumbCount === 1) || index + 2 === totalCrumbCount;
    });
  }
}

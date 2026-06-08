import {
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  Input,
  QueryList,
  ViewEncapsulation,
  AfterContentChecked,
  ChangeDetectionStrategy,
} from '@angular/core';

import { LgBreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbVariant } from './breadcrumb-item/breadcrumb-item.interface';

@Component({
  selector: 'lg-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: [ './breadcrumb.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgBreadcrumbComponent implements AfterContentChecked {
  @Input() variant: BreadcrumbVariant = BreadcrumbVariant.page;

  @HostBinding('class.lg-breadcrumb') class = true;
  @HostBinding('class.lg-breadcrumb--page') get isPage() {
    return this.variant === BreadcrumbVariant.page;
  }
  @HostBinding('class.lg-breadcrumb--embedded') get isEmbedded() {
    return this.variant === BreadcrumbVariant.embedded;
  }
  @HostBinding('attr.aria-label') attr = 'breadcrumb';
  @HostBinding('attr.role') role = 'navigation';

  @ContentChildren(forwardRef(() => LgBreadcrumbItemComponent), {
    descendants: true,
  })
  crumbs: QueryList<LgBreadcrumbItemComponent>;

  ngAfterContentChecked(): void {
    this.setCrumbProperties();
  }

  private setCrumbProperties(): void {
    this.crumbs.forEach((crumb, index) => {
      const totalCrumbCount = this.crumbs.length;

      crumb.index = index;

      crumb.hideIcons = totalCrumbCount === 2 && !index;

      crumb.showBackChevron = totalCrumbCount > 1;

      crumb.showForwardChevron = index + 1 !== totalCrumbCount;

      crumb.isSmScreenFeaturedItem =
        (!index && totalCrumbCount === 1) || index + 2 === totalCrumbCount;

      crumb.isCurrentPage = index + 1 === totalCrumbCount;
    });
  }
}

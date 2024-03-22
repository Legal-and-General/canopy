import {
  Component,
  ElementRef,
  HostBinding,
  Renderer2,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { BreadcrumbVariant } from '../breadcrumb-item/breadcrumb-item.interface';
import {
  lgIconCaretRight,
  LgIconComponent,
  lgIconOverflowHorizontal,
  LgIconRegistry,
} from '../../icon';

@Component({
  selector: 'lg-breadcrumb-item-ellipsis',
  templateUrl: './breadcrumb-item-ellipsis.component.html',
  styleUrls: [ './breadcrumb-item-ellipsis.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ LgIconComponent ],
})
export class LgBreadcrumbItemEllipsisComponent {
  private _variant: BreadcrumbVariant;

  @HostBinding('class.lg-breadcrumb-item-ellipsis') class = true;

  set variant(variant: BreadcrumbVariant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-breadcrumb-item-ellipsis--${this.variant}`,
      );
    }

    this.renderer.addClass(
      this.hostElement.nativeElement,
      `lg-breadcrumb-item-ellipsis--${variant}`,
    );

    this._variant = variant;
  }
  get variant() {
    return this._variant;
  }

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private registry: LgIconRegistry,
  ) {
    this.registry.registerIcons([ lgIconCaretRight, lgIconOverflowHorizontal ]);
  }
}

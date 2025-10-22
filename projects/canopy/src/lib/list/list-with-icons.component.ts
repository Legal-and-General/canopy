import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  Input,
  QueryList,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { ListWithIconsVariant } from './list-with-icons.interface';

@Component({
  selector: '[lg-list-with-icons]',
  template: '<ng-content select="[lg-list-with-icons-item]" />',
  styleUrls: [ './list-with-icons.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-list-with-icons',
  },
  standalone: true,
})
export class LgListWithIconsComponent implements AfterContentInit {
  private hostElement = inject(ElementRef);
  private renderer = inject(Renderer2);

  private _variant: ListWithIconsVariant;
  @Input()
  set variant(variant: ListWithIconsVariant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-list-with-icons--${this.variant}`,
      );
    }

    if (variant) {
      this.renderer.addClass(
        this.hostElement.nativeElement,
        `lg-list-with-icons--${variant}`,
      );
    }

    this._variant = variant;
  }
  get variant(): ListWithIconsVariant {
    return this._variant;
  }

  @ContentChildren(forwardRef(() => LgListWithIconsComponent), {
    descendants: true,
  })
  nestedListWithIconsComponents: QueryList<LgListWithIconsComponent>;

  ngAfterContentInit(): void {
    this.variant = this.variant || 'neutral-foreground';

    this.nestedListWithIconsComponents.forEach(nestedListWithIconsComponent => {
      nestedListWithIconsComponent.variant = this.variant;
    });
  }
}

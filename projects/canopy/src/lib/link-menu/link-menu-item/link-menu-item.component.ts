import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { LgIconComponent } from '../../icon';

@Component({
  selector: 'lg-link-menu-item',
  templateUrl: './link-menu-item.component.html',
  styleUrls: [ './link-menu-item.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ LgIconComponent ],
})
export class LgLinkMenuItemComponent implements OnInit {
  private elementRef = inject(ElementRef);

  @HostBinding('class.lg-link-menu-item') class = true;

  @ContentChild(LgIconComponent) iconComponent: LgIconComponent;

  @Input() rightIcon: string | null | undefined = undefined;

  openInANewTab = false;

  get rightIconName(): string | null {
    if (this.rightIcon !== undefined) {
      return this.rightIcon;
    }

    return this.openInANewTab
      ? 'link-external'
      : 'arrow-right';
  }

  ngOnInit(): void {
    if (this.elementRef) {
      const parent = (this.elementRef.nativeElement as HTMLElement).parentElement;

      const tag = parent?.tagName;

      if (tag === 'A') {
        this.openInANewTab =
          (parent as HTMLAnchorElement).getAttribute('target') === '_blank';
      } else {
        console.warn(
          `expected 'lg-link-menu-item' parent to be an HTML Anchor but got ${tag}`,
        );
      }
    }
  }
}

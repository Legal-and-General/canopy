import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { NgIf } from '@angular/common';

import { LgIconComponent } from '../../icon';
import { LgIconComponent as LgIconComponent_1 } from '../../icon/icon.component';

@Component({
  selector: 'lg-link-menu-item',
  templateUrl: './link-menu-item.component.html',
  styleUrls: [ './link-menu-item.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ NgIf, LgIconComponent_1 ],
})
export class LgLinkMenuItemComponent implements OnInit {
  @HostBinding('class.lg-link-menu-item') class = true;

  @ContentChild(LgIconComponent) iconComponent: LgIconComponent;

  openInANewTab = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (this.elementRef) {
      const parent = this.elementRef.nativeElement.parentElement;

      const tag = parent?.tagName;

      if (tag === 'A') {
        this.openInANewTab = parent.getAttribute('target') === '_blank';
      } else {
        console.warn(
          `expected 'lg-link-menu-item' parent to be an HTML Anchor but got ${tag}`,
        );
      }
    }
  }
}

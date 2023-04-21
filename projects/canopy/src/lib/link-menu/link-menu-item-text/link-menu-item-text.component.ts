import {
  ChangeDetectionStrategy,
  Component,
  HostBinding, Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-link-menu-item-text',
  templateUrl: './link-menu-item-text.component.html',
  styleUrls: [ './link-menu-item-text.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgLinkMenuItemTextComponent {
  @HostBinding('class.lg-link-menu-item-text') class = true;
  @HostBinding('class.lg-link-menu-item-text--bold') get getIsBold() {
    return this.isBold;
  }
  @Input() isBold = false;
}

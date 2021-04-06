import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-side-nav-bar-item',
  templateUrl: './side-nav-bar-item.component.html',
  styleUrls: ['./side-nav-bar-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgSideNavBarItemComponent {
  @HostBinding('class.lg-side-nav-bar-item') class = true;

  @Input() title: string;
  @Input() description: string;
}

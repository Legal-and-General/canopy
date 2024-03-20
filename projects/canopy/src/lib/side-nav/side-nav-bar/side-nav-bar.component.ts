import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { LgCardContentComponent } from '../../card/card-content/card-content.component';
import { LgMarginDirective } from '../../spacing/margin/margin.directive';
import { LgPaddingDirective } from '../../spacing/padding/padding.directive';
import { LgCardComponent } from '../../card/card.component';

@Component({
  selector: 'lg-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: [ './side-nav-bar.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    LgCardComponent,
    LgPaddingDirective,
    LgMarginDirective,
    LgCardContentComponent,
  ],
})
export class LgSideNavBarComponent {
  @HostBinding('class.lg-side-nav-bar') class = true;
  @HostBinding('attr.role') ariaRole = 'navigation';
  @HostBinding('attr.aria-label')
  @Input()
  label = 'Nav';
  get ariaLabel() {
    return this.label;
  }
}

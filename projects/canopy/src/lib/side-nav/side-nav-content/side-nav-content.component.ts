import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgSideNavContentComponent {
  @Input() selectedNavId: string;

  @HostBinding('class.lg-side-nav-content') class = true;
  @HostBinding('attr.aria-labelledby')
  get labelledBy() {
    return this.selectedNavId;
  }
}

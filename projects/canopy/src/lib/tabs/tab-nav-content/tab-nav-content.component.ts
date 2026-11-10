import {
  Component,
  Input,
  ViewEncapsulation,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'lg-tab-nav-content',
  templateUrl: './tab-nav-content.component.html',
  styleUrls: [ './tab-nav-content.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class LgTabNavContentComponent {
  @Input() selectedTabId: string;

  @HostBinding('class.lg-tab-nav-content') class = true;
  @HostBinding('attr.role') ariaRole = 'tabpanel';
  @HostBinding('attr.aria-labelledby')
  get labelledBy() {
    return this.selectedTabId;
  }
}

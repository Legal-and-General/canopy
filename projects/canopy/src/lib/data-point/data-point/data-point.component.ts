import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-data-point',
  templateUrl: './data-point.component.html',
  styleUrls: ['./data-point.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgDataPointComponent {
  @HostBinding('class.lg-data-point') class = true;
  @HostBinding('attr.role')
  get role() {
    return this.isListItem ? 'listitem' : null;
  }
  @Input() isListItem: boolean;
}

import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: '[lg-quick-action]',
  templateUrl: './quick-action.component.html',
  styleUrls: ['./quick-action.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgQuickActionComponent {
  @HostBinding('class.lg-quick-action') class = true;
}

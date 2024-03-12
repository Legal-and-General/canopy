import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-primary-message-title',
  templateUrl: './primary-message-title.component.html',
  styleUrls: [ './primary-message-title.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgPrimaryMessageTitleComponent {
  @HostBinding('class.lg-primary-message-title') class = true;
}

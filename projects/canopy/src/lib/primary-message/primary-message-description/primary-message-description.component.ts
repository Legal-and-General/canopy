import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-primary-message-description',
  templateUrl: './primary-message-description.component.html',
  styleUrls: [ './primary-message-description.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgPrimaryMessageDescriptionComponent {
  @HostBinding('class.lg-primary-message-description') class = true;
}

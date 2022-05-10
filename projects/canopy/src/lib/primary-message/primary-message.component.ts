import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-primary-message',
  templateUrl: './primary-message.component.html',
  styleUrls: [ './primary-message.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgPrimaryMessageComponent {
  @Input() hasRole = true;
  @HostBinding('attr.role') get roleAttr() {
    return this.hasRole
      ? 'alert'
      : null;
  }

  @HostBinding('class.lg-primary-message') class = true;
}

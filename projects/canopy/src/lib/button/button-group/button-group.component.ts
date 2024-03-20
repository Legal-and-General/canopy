import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: [ './button-group.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgButtonGroupComponent {
  @HostBinding('class.lg-btn-group') class = true;
}

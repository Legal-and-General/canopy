import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-progress-header',
  templateUrl: './progress-header.component.html',
  styleUrls: [ './progress-header.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgProgressHeaderComponent {
  @HostBinding('class.lg-progress-header') class = true;
}

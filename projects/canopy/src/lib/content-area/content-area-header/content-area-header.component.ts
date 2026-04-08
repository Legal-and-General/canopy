import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-content-area-header',
  templateUrl: './content-area-header.component.html',
  styleUrls: [ './content-area-header.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgContentAreaHeaderComponent {
  @HostBinding('class.lg-content-area-header') class = true;
}

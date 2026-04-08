import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: [ './content-area.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgContentAreaComponent {
  @HostBinding('class.lg-content-area') class = true;
}

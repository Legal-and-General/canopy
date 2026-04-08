import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-content-area-content',
  templateUrl: './content-area-content.component.html',
  styleUrls: [ './content-area-content.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgContentAreaContentComponent {
  @HostBinding('class.lg-content-area-content') class = true;
}

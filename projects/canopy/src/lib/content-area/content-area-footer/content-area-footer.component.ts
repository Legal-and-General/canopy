import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-content-area-footer',
  templateUrl: './content-area-footer.component.html',
  styleUrls: [ './content-area-footer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgContentAreaFooterComponent {
  @HostBinding('class.lg-content-area-footer') class = true;
}

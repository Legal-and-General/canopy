import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: [ './card-footer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgCardFooterComponent {
  @HostBinding('class.lg-card-footer') class = true;
}

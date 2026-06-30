import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'lg-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: [ './card-content.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LgCardContentComponent {
  @HostBinding('class.lg-card-content') class = true;
}

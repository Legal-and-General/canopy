import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LgIconComponent } from '../../icon';

@Component({
  selector: 'lg-auto-play',
  templateUrl: './auto-play.component.html',
  styleUrls: [ './auto-play.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  imports: [ LgIconComponent ],
})
export class LgAutoplayComponent {
  element = inject(ElementRef);

  @Input() pause: BehaviorSubject<boolean>;

  @HostBinding('class.lg-carousel-autoplay') class = true;
}

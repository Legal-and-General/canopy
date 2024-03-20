import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgIf } from '@angular/common';

import { LgIconComponent } from '../../icon/icon.component';

@Component({
  selector: 'lg-auto-play',
  templateUrl: './auto-play.component.html',
  styleUrls: [ './auto-play.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [ NgIf, LgIconComponent ],
})
export class LgAutoplayComponent {
  @Input() pause: BehaviorSubject<boolean>;

  @HostBinding('class.lg-carousel-autoplay') class = true;

  constructor(public element: ElementRef) {}
}

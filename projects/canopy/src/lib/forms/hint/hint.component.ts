import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';

let nextUniqueId = 0;

@Component({
  selector: 'lg-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgHintComponent {
  @HostBinding('id')
  @Input()
  id = `lg-hint-${nextUniqueId++}`;

  @HostBinding('class.lg-hint') class = true;
}

import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

import { randomUniqueId } from '../../utils';

@Component({
  selector: 'lg-hint',
  templateUrl: './hint.component.html',
  styleUrls: [ './hint.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class LgHintComponent {
  @HostBinding('id')
  @Input()
  id = `lg-hint-${randomUniqueId()}`;

  @HostBinding('class.lg-hint') class = true;
}

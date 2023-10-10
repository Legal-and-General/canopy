import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[lg-card-group]',
  templateUrl: './card-group.component.html',
  styleUrls: [ './card-group.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-card-group',
  },
})
export class LgCardGroupComponent {}

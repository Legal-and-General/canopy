import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lg-tab-item-content',
  templateUrl: './tab-item-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgTabItemContentComponent {}

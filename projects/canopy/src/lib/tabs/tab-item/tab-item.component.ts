import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'lg-tab-item',
  templateUrl: './tab-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgTabItemComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChild('navItemTemplate', { static: true }) navItemTemplate: TemplateRef<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
}

import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'lg-tab-item',
  templateUrl: './tab-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgTabItemComponent {
  @ViewChild('navItemTemplate', { static: true })
  navItemTemplate: TemplateRef<any>;

  @ViewChild('contentTemplate', { static: true })
  contentTemplate: TemplateRef<any>;
}

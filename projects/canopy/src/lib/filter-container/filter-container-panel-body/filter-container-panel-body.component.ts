import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-filter-container-panel-body',
  templateUrl: './filter-container-panel-body.component.html',
  styleUrls: [ './filter-container-panel-body.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-filter-container-panel-body',
  },
})
export class LgFilterContainerPanelBodyComponent {}

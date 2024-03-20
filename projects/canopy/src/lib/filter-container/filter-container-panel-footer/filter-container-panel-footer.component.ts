import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-filter-container-panel-footer',
  templateUrl: './filter-container-panel-footer.component.html',
  styleUrls: [ './filter-container-panel-footer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-filter-container-panel-footer',
  },
  standalone: true,
})
export class LgFilterContainerPanelFooterComponent {}

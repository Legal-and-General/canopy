import {
  AfterContentInit,
  Component,
  ContentChild,
  HostBinding,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { LgCardContentComponent } from './card-content/card-content.component';
import { LgCardHeaderComponent } from './card-header/card-header.component';

@Component({
  selector: 'lg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgCardComponent implements AfterContentInit {
  @HostBinding('class.lg-card') class = true;

  @ContentChild(LgCardHeaderComponent, { static: false })
  lgCardHeaderComponent: LgCardHeaderComponent;

  @ContentChild(LgCardContentComponent, { static: false })
  lgCardContentComponent: LgCardContentComponent;

  cardContent: QueryList<LgCardContentComponent>;

  ngAfterContentInit() {
    if (this.lgCardHeaderComponent && this.lgCardContentComponent) {
      this.lgCardHeaderComponent.hasContent = true;
    }
  }
}

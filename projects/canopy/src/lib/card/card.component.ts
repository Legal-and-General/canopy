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
import { LgCardBottomAreaComponent } from './card-bottom-area/card-bottom-area.component';
import { LgCardTopAreaComponent } from './card-top-area/card-top-area.component';

@Component({
  selector: 'lg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgCardComponent implements AfterContentInit {
  @HostBinding('class.lg-card') class = true;
  @HostBinding('class.lg-card__form-journey') get formJourneyClass() {
    return this.LgCardBottomAreaComponent ? true : false;
  }

  @ContentChild(LgCardHeaderComponent)
  lgCardHeaderComponent: LgCardHeaderComponent;

  @ContentChild(LgCardContentComponent)
  lgCardContentComponent: LgCardContentComponent;

  @ContentChild(LgCardTopAreaComponent)
  LgCardTopAreaComponent: LgCardTopAreaComponent;

  @ContentChild(LgCardBottomAreaComponent)
  LgCardBottomAreaComponent: LgCardBottomAreaComponent;

  cardContent: QueryList<LgCardContentComponent>;

  ngAfterContentInit() {
    if (this.lgCardHeaderComponent && this.lgCardContentComponent) {
      this.lgCardHeaderComponent.hasContent = true;
    }
  }
}

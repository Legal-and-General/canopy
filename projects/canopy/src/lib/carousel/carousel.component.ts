import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { HeadingLevel } from '../heading';
import { LgCarouselItemComponent } from './carousel-item/carousel-item.component';

@Component({
  selector: 'lg-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgCarouselComponent implements AfterContentInit {
  @Input() description: string;
  @Input() headingLevel: HeadingLevel;
  @Input() loopMode = false;
  @Input() slideDuration = 500;

  @ContentChildren(LgCarouselItemComponent, { read: LgCarouselItemComponent })
  carouselItems = new QueryList<LgCarouselItemComponent>();
  selectedItem: LgCarouselItemComponent;
  carouselItemCount: number;
  selectedItemIndex: number;
  selectedItemContent: string;

  selectCarouselItem(index: number): void {
    this.selectedItemIndex = index;
    this.selectedItem = this.carouselItems.get(index);
    this.selectedItemContent = this.selectedItem.itemContent;

    this.carouselItems.forEach((carouselItem: LgCarouselItemComponent) => {
      carouselItem.selected = false;
    });
    this.selectedItem.selected = true;
  }

  nextCarouselItem(): void {
    if (this.selectedItemIndex === this.carouselItemCount - 1) {
      this.selectCarouselItem(0);
    } else {
      this.selectCarouselItem(this.selectedItemIndex + 1);
    }
  }

  previousCarouselItem(): void {
    if (this.selectedItemIndex === 0) {
      this.selectCarouselItem(this.carouselItemCount - 1);
    } else {
      this.selectCarouselItem(this.selectedItemIndex - 1);
    }
  }

  ngAfterContentInit(): void {
    this.carouselItemCount = this.carouselItems.length;
    this.selectCarouselItem(0);
  }
}

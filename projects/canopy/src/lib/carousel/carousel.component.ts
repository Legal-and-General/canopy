import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, defer, interval, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, withLatestFrom } from 'rxjs/operators';
import { NgIf, NgFor, NgClass } from '@angular/common';

import type { HeadingLevel } from '../heading';
import { LgIconComponent } from '../icon/icon.component';
import { LgHeadingComponent } from '../heading/heading.component';

import { LgCarouselItemComponent } from './carousel-item/carousel-item.component';
import { LgAutoplayComponent } from './auto-play/auto-play.component';

@Component({
  selector: 'lg-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [ './carousel.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    LgHeadingComponent,
    NgIf,
    LgAutoplayComponent,
    LgIconComponent,
    NgFor,
    NgClass,
  ],
})
export class LgCarouselComponent implements AfterContentInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject<void>();
  selectedItem: LgCarouselItemComponent;
  carouselItemCount: number;
  selectedItemIndexSet$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  selectedItemIndex: number;
  selectedItemContent: string;
  pause = new BehaviorSubject<boolean>(false);
  pausableTimer$: Observable<void>;

  @Input() description: string;
  @Input() headingLevel: HeadingLevel;
  @Input() loopMode = false;
  @Input() slideDuration = 500;
  @Input() autoPlay = false;
  @Input() autoPlayDelay = 2000;

  @ContentChildren(LgCarouselItemComponent, { read: LgCarouselItemComponent })
  carouselItems = new QueryList<LgCarouselItemComponent>();

  constructor(private cd: ChangeDetectorRef) {}

  pauseCarousel(): void {
    this.pause.next(true);
  }

  playCarousel(): void {
    this.pause.next(false);
  }

  selectCarouselItem(index: number): void {
    this.selectedItemIndexSet$.next(index);
    this.selectedItem = this.carouselItems.get(index);
    this.selectedItemContent = this.selectedItem.itemContent;

    this.carouselItems.forEach((carouselItem: LgCarouselItemComponent) => {
      carouselItem.selected = false;
    });

    this.selectedItem.selected = true;
    this.cd.detectChanges();
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

  setAutoPlayInterval(): void {
    this.pausableTimer$ = defer(() => {
      return interval(this.autoPlayDelay).pipe(
        takeUntil(this.unsubscribe),
        withLatestFrom(this.pause),
        filter(([ , paused ]) => !paused),
        map(() => this.nextCarouselItem()),
      );
    });

    this.pausableTimer$.subscribe();
    this.cd.detectChanges();
  }

  ngAfterContentInit(): void {
    this.selectedItemIndexSet$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(itemIndex => {
        this.selectedItemIndex = itemIndex;
      });

    this.carouselItemCount = this.carouselItems.length;
    this.selectCarouselItem(0);

    if (this.autoPlay) {
      this.setAutoPlayInterval();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

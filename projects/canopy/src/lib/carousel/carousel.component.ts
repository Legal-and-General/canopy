import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  HostListener,
  Input,
  OnDestroy,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { BehaviorSubject, defer, interval, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, withLatestFrom } from 'rxjs/operators';

import type { HeadingLevel } from '../heading';
import { LgCarouselItemComponent } from './carousel-item/carousel-item.component';

@Component({
  selector: 'lg-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgCarouselComponent implements AfterContentInit, OnDestroy {

  constructor(private cd: ChangeDetectorRef) {}
  @Input() description: string;
  @Input() headingLevel: HeadingLevel;
  @Input() loopMode = false;
  @Input() slideDuration = 500;
  @Input() autoPlay = false;
  @Input() autoPlayDelay = 2000;

  @ContentChildren(LgCarouselItemComponent, { read: LgCarouselItemComponent })
  carouselItems = new QueryList<LgCarouselItemComponent>();
  selectedItem: LgCarouselItemComponent;
  carouselItemCount: number;
  selectedItemIndex: number;
  selectedItemContent: string;
  private unsubscribe: Subject<void> = new Subject<void>();
  pause = new BehaviorSubject<boolean>(false);
  pausableTimer$: Observable<void>;

  @HostListener('document:keydown.tab', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    const parent = target.parentElement as HTMLElement;
    const el = parent.className;

    if (el === 'lg-carousel-item') {
      this.nextCarouselItem();
      event.preventDefault();
      this.cd.detectChanges();
    }
  }

  selectCarouselItem(index: number): void {
    this.selectedItemIndex = index;
    this.selectedItem = this.carouselItems.get(index);
    this.selectedItemContent = this.selectedItem.itemContent;

    this.carouselItems.forEach((carouselItem: LgCarouselItemComponent) => {
      carouselItem.selected = false;
      carouselItem.pauseEmit.subscribe((el: string) => {
        if (el === 'button') {
          this.pause.next(true);
          this.cd.detectChanges();
        }
      });
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
        filter(([, paused]) => !paused),
        map(() => this.nextCarouselItem()),
      );
    });
    this.pausableTimer$.subscribe();
    this.cd.detectChanges();
  }

  ngAfterContentInit(): void {
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

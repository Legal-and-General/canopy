import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgCarouselItemComponent {
  @HostBinding('class.lg-carousel-item') class = true;
  @HostBinding('attr.role') role = 'tab-panel';
  @HostBinding('attr.aria-selected') public selected = false;

  constructor(public element: ElementRef) {}

  get itemContent() {
    return this.element.nativeElement.innerHTML;
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
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
  @HostBinding('attr.role') role = 'tabpanel';
  @HostBinding('attr.aria-selected') public selected = false;

  @Output() pauseEmit = new EventEmitter<string>();

  @HostListener('click', ['$event.target.type'])
  onClick(btn: string): void {
    if (btn === 'button') {
      this.pauseEmit.emit(btn);
    }
  }

  constructor(public element: ElementRef) {}

  get itemContent() {
    return this.element.nativeElement.innerHTML;
  }
}

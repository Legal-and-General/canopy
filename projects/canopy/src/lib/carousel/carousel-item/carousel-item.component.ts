import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'lg-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: [ './carousel-item.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgCarouselItemComponent {
  private cdr = inject(ChangeDetectorRef);
  private _selected = false;

  element = inject(ElementRef);

  @HostBinding('class.lg-carousel-item') class = true;
  @HostBinding('attr.role') role = 'tabpanel';

  @HostBinding('attr.aria-selected') get selected(): boolean {
    return this._selected;
  }
  set selected(value: boolean) {
    this._selected = value;
    this.cdr.markForCheck();
  }

  get itemContent() {
    return this.element.nativeElement.innerHTML;
  }
}

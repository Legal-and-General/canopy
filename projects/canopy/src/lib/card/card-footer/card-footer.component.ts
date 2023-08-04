import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: [ './card-footer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgCardFooterComponent implements AfterViewInit {
  @HostBinding('class.lg-card-footer') class = true;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  ngAfterViewInit() {
    const parentElem = this.hostElement.nativeElement as HTMLElement;
    const firstChildElem = parentElem.firstChild as HTMLElement;

    if (firstChildElem.localName === 'lg-link-menu') {
      this.renderer.addClass(parentElem, 'lg-padding__top--none');
    }
  }
}

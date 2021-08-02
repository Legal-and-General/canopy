import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
  ElementRef,
  Renderer2,
} from '@angular/core';

import { ContentScrollBreakpoints } from './content-scroll.interface';

@Component({
  selector: 'lg-content-scroll',
  styleUrls: ['./content-scroll.component.scss'],
  templateUrl: './content-scroll.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LgContentSrollComponent {
  @HostBinding('class') class = 'lg-content-scroll';

  private _scrollContentAt: ContentScrollBreakpoints;
  @Input()
  set scrollContentAt(columnsBreakpoint: ContentScrollBreakpoints) {
    if (columnsBreakpoint === null) {
      columnsBreakpoint = this._scrollContentAt;
    }

    this.addContentScrollBreakpoint(columnsBreakpoint);
    this._scrollContentAt = columnsBreakpoint;
  }
  get scrollContentAt(): ContentScrollBreakpoints {
    return this._scrollContentAt;
  }

  private _scrollHeight: string;
  @Input()
  set scrollHeight(value: string) {
    if (value === null || value === '') {
      value = this._scrollHeight;
    }
    this.setHeight(value);
    this._scrollHeight = value;
  }
  get scrollHeight(): string {
    return this._scrollHeight;
  }

  @Input() listNoIndent = false;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
    this._scrollContentAt = ContentScrollBreakpoints.Small;
    this._scrollHeight = '40vh';

    this.addContentScrollBreakpoint(this._scrollContentAt);
    this.setHeight(this._scrollHeight);
  }

  private addContentScrollBreakpoint(columnsBreakpoint: ContentScrollBreakpoints) {
    this.renderer.removeClass(
      this.hostElement.nativeElement,
      `lg-content-scroll__scroll-at-${this._scrollContentAt}`,
    );

    this.renderer.addClass(
      this.hostElement.nativeElement,
      `lg-content-scroll__scroll-at-${columnsBreakpoint}`,
    );
  }

  private setHeight(value: string) {
    this.renderer.removeStyle(this.hostElement.nativeElement, 'height');

    this.renderer.setStyle(this.hostElement.nativeElement, 'height', value);
  }
}

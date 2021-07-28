import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-content-scroll',
  styleUrls: ['./content-scroll.component.scss'],
  templateUrl: './content-scroll.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LgContentSrollComponent {
  @HostBinding('class.lg-content-scroll') class = true;
  @Input() contentWidth: string = null;
  @Input() contentHeight: string = null;
  @Input() mobileFullContent = true;
  @Input() listNoIndent = false;

  private defaultWidth = 'auto';
  private defaultHeight = '40vh';
  private unitWidthPattern = new RegExp(
    '(^(auto|([0-9]+(em|px|%|px|cm|mm|in|pt|pc|ch|rem|vw|vmin|vmax)))$)',
  );
  private unitHeightPattern = new RegExp(
    '(^(auto|([0-9]+(em|px|%|px|cm|mm|in|pt|pc|ch|rem|vh|vmin|vmax)))$)',
  );

  getHeight() {
    if (this.unitHeightPattern.test(this.contentHeight)) {
      return this.contentHeight;
    }
    return this.defaultHeight;
  }
  getWidth() {
    if (this.unitWidthPattern.test(this.contentWidth)) {
      return this.contentWidth;
    }
    return this.defaultWidth;
  }
}

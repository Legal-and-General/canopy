import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[lgCol],[lgColSm],[lgColMd],[lgColLg]',
})
export class LgGridColDirective {
  lgColClass: string;
  @Input()
  set lgCol(columns: number) {
    this.lgColClass = this.toggleColumnClass(`lg-col-xs-${columns}`, this.lgColClass);
  }

  lgColSmClass: string;
  @Input()
  set lgColSm(columns: number) {
    this.lgColSmClass = this.toggleColumnClass(`lg-col-sm-${columns}`, this.lgColSmClass);
  }

  lgColMdClass: string;
  @Input()
  set lgColMd(columns: number) {
    this.lgColMdClass = this.toggleColumnClass(`lg-col-md-${columns}`, this.lgColMdClass);
  }

  lgColLgClass: string;
  @Input()
  set lgColLg(columns: number) {
    this.lgColLgClass = this.toggleColumnClass(`lg-col-lg-${columns}`, this.lgColLgClass);
  }

  lgColOffsetClass: string;
  @Input()
  set lgColOffset(columns: number) {
    this.lgColOffsetClass = this.toggleColumnClass(
      `lg-col-xs-offset-${columns}`,
      this.lgColOffsetClass,
    );
  }

  lgColSmOffsetClass: string;
  @Input()
  set lgColSmOffset(columns: number) {
    this.lgColSmOffsetClass = this.toggleColumnClass(
      `lg-col-sm-offset-${columns}`,
      this.lgColSmOffsetClass,
    );
  }

  lgColMdOffsetClass: string;
  @Input()
  set lgColMdOffset(columns: number) {
    this.lgColMdOffsetClass = this.toggleColumnClass(
      `lg-col-md-offset-${columns}`,
      this.lgColMdOffsetClass,
    );
  }

  lgColLgOffsetClass: string;
  @Input()
  set lgColLgOffset(columns: number) {
    this.lgColLgOffsetClass = this.toggleColumnClass(
      `lg-col-lg-offset-${columns}`,
      this.lgColLgOffsetClass,
    );
  }

  toggleColumnClass(newClass: string, oldClass: string): string {
    if (oldClass) {
      this.renderer.removeClass(this.hostElement.nativeElement, oldClass);
    }
    this.renderer.addClass(this.hostElement.nativeElement, newClass);
    return newClass;
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}
}

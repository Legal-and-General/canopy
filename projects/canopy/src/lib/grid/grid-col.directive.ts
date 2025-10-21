import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[lgCol],[lgColSm],[lgColMd],[lgColLg]',
  standalone: true,
})
export class LgGridColDirective {
  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);

  lgColClass: string;
  lgColSmClass: string;
  lgColMdClass: string;
  lgColLgClass: string;
  lgColOffsetClass: string;
  lgColSmOffsetClass: string;
  lgColMdOffsetClass: string;
  lgColLgOffsetClass: string;

  @Input()
  set lgCol(columns: number) {
    this.lgColClass = this.toggleColumnClass(`lg-col-xs-${columns}`, this.lgColClass);
  }

  @Input()
  set lgColSm(columns: number) {
    this.lgColSmClass = this.toggleColumnClass(`lg-col-sm-${columns}`, this.lgColSmClass);
  }

  @Input()
  set lgColMd(columns: number) {
    this.lgColMdClass = this.toggleColumnClass(`lg-col-md-${columns}`, this.lgColMdClass);
  }

  @Input()
  set lgColLg(columns: number) {
    this.lgColLgClass = this.toggleColumnClass(`lg-col-lg-${columns}`, this.lgColLgClass);
  }

  @Input()
  set lgColOffset(columns: number) {
    this.lgColOffsetClass = this.toggleColumnClass(
      `lg-col-xs-offset-${columns}`,
      this.lgColOffsetClass,
    );
  }

  @Input()
  set lgColSmOffset(columns: number) {
    this.lgColSmOffsetClass = this.toggleColumnClass(
      `lg-col-sm-offset-${columns}`,
      this.lgColSmOffsetClass,
    );
  }

  @Input()
  set lgColMdOffset(columns: number) {
    this.lgColMdOffsetClass = this.toggleColumnClass(
      `lg-col-md-offset-${columns}`,
      this.lgColMdOffsetClass,
    );
  }

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
}

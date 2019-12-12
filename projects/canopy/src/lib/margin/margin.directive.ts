import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { SpacingVariant } from './margin.interface';

@Directive({
  selector:
    '[lgMargin],[lgMarginTop],[lgMarginRight],[lgMarginBottom],[lgMarginLeft]'
})
export class LgMarginDirective {
  marginTopClass: string;
  @Input()
  set lgMarginTop(margin: SpacingVariant) {
    this.marginTopClass = this.toggleMarginClass(
      `lg-margin__top--${margin}`,
      this.marginTopClass
    );
  }

  marginRightClass: string;
  @Input()
  set lgMarginRight(margin: SpacingVariant) {
    this.marginRightClass = this.toggleMarginClass(
      `lg-margin__right--${margin}`,
      this.marginRightClass
    );
  }

  marginBottomClass: string;
  @Input()
  set lgMarginBottom(margin: SpacingVariant) {
    this.marginBottomClass = this.toggleMarginClass(
      `lg-margin__bottom--${margin}`,
      this.marginBottomClass
    );
  }

  marginLeftClass: string;
  @Input()
  set lgMarginLeft(margin: SpacingVariant) {
    this.marginLeftClass = this.toggleMarginClass(
      `lg-margin__left--${margin}`,
      this.marginLeftClass
    );
  }

  marginClass: string;
  @Input()
  set lgMargin(margin: SpacingVariant) {
    this.marginClass = this.toggleMarginClass(
      `lg-margin--${margin}`,
      this.marginClass
    );
  }

  toggleMarginClass(newClass: string, oldClass: string): string {
    if (oldClass) {
      this.renderer.removeClass(this.hostElement.nativeElement, oldClass);
    }
    this.renderer.addClass(this.hostElement.nativeElement, newClass);
    return newClass;
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}
}

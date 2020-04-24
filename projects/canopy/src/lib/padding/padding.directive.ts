import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { SpacingVariant } from './padding.interface';

@Directive({
  selector: `
    [lgPadding],
    [lgPaddingVertical],
    [lgPaddingHorizontal],
    [lgPaddingTop],
    [lgPaddingRight],
    [lgPaddingBottom],
    [lgPaddingLeft]
  `
})
export class LgPaddingDirective {
  paddingTopClass: string;
  @Input()
  set lgPaddingTop(padding: SpacingVariant) {
    this.paddingTopClass = this.togglePaddingClass(
      `lg-padding__top--${padding}`,
      this.paddingTopClass
    );
  }

  paddingRightClass: string;
  @Input()
  set lgPaddingRight(padding: SpacingVariant) {
    this.paddingRightClass = this.togglePaddingClass(
      `lg-padding__right--${padding}`,
      this.paddingRightClass
    );
  }

  paddingBottomClass: string;
  @Input()
  set lgPaddingBottom(padding: SpacingVariant) {
    this.paddingBottomClass = this.togglePaddingClass(
      `lg-padding__bottom--${padding}`,
      this.paddingBottomClass
    );
  }

  paddingLeftClass: string;
  @Input()
  set lgPaddingLeft(padding: SpacingVariant) {
    this.paddingLeftClass = this.togglePaddingClass(
      `lg-padding__left--${padding}`,
      this.paddingLeftClass
    );
  }

  @Input()
  set lgPaddingHorizontal(padding: SpacingVariant) {
    this.lgPaddingLeft = padding;
    this.lgPaddingRight = padding;
  }

  @Input()
  set lgPaddingVertical(padding: SpacingVariant) {
    this.lgPaddingTop = padding;
    this.lgPaddingBottom = padding;
  }

  paddingClass: string;
  @Input()
  set lgPadding(padding: SpacingVariant) {
    this.paddingClass = this.togglePaddingClass(
      `lg-padding--${padding}`,
      this.paddingClass
    );
  }

  togglePaddingClass(newClass: string, oldClass: string): string {
    if (oldClass) {
      this.renderer.removeClass(this.hostElement.nativeElement, oldClass);
    }
    this.renderer.addClass(this.hostElement.nativeElement, newClass);
    return newClass;
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}
}

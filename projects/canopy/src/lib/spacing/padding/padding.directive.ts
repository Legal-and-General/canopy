import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { ResponsiveSpacing, SpacingVariant } from '../spacing.interface';

@Directive({
  selector: `
    [lgPadding],
    [lgPaddingVertical],
    [lgPaddingHorizontal],
    [lgPaddingTop],
    [lgPaddingRight],
    [lgPaddingBottom],
    [lgPaddingLeft]
  `,
})
export class LgPaddingDirective {
  paddingTopClasses: Array<string> = [];
  @Input()
  set lgPaddingTop(padding: SpacingVariant | ResponsiveSpacing) {
    const newClasses = this.createNewClasses(padding, 'lg-padding__top');
    this.paddingTopClasses = this.toggleClasses(newClasses, this.paddingTopClasses);
  }

  paddingRightClasses: Array<string> = [];
  @Input()
  set lgPaddingRight(padding: SpacingVariant | ResponsiveSpacing) {
    const newClasses = this.createNewClasses(padding, 'lg-padding__right');
    this.paddingRightClasses = this.toggleClasses(newClasses, this.paddingRightClasses);
  }

  paddingBottomClasses: Array<string> = [];
  @Input()
  set lgPaddingBottom(padding: SpacingVariant | ResponsiveSpacing) {
    const newClasses = this.createNewClasses(padding, 'lg-padding__bottom');
    this.paddingBottomClasses = this.toggleClasses(newClasses, this.paddingBottomClasses);
  }

  paddingLeftClasses: Array<string> = [];
  @Input()
  set lgPaddingLeft(padding: SpacingVariant | ResponsiveSpacing) {
    const newClasses = this.createNewClasses(padding, 'lg-padding__left');
    this.paddingLeftClasses = this.toggleClasses(newClasses, this.paddingLeftClasses);
  }

  @Input()
  set lgPaddingHorizontal(padding: SpacingVariant | ResponsiveSpacing) {
    this.lgPaddingLeft = padding;
    this.lgPaddingRight = padding;
  }

  @Input()
  set lgPaddingVertical(padding: SpacingVariant | ResponsiveSpacing) {
    this.lgPaddingTop = padding;
    this.lgPaddingBottom = padding;
  }

  paddingClasses: Array<string> = [];
  @Input()
  set lgPadding(padding: SpacingVariant | ResponsiveSpacing) {
    const newClasses = this.createNewClasses(padding, 'lg-padding');
    this.paddingClasses = this.toggleClasses(newClasses, this.paddingClasses);
  }

  createNewClasses(padding: SpacingVariant | ResponsiveSpacing, classPrefix: string) {
    const newClasses = [];
    if (!padding) {
      return [];
    }
    if (typeof padding === 'object') {
      Object.keys(padding).forEach((key) => {
        newClasses.push(`${classPrefix}--${key}--${padding[key]}`);
      });
    } else {
      newClasses.push([`${classPrefix}--${padding}`]);
    }
    return newClasses;
  }

  toggleClasses(newClasses: Array<string>, oldClasses: Array<string>) {
    if (oldClasses.length) {
      oldClasses.forEach((oldClass) => {
        this.renderer.removeClass(this.hostElement.nativeElement, oldClass);
      });
    }
    newClasses.forEach((newClass) => {
      this.renderer.addClass(this.hostElement.nativeElement, newClass);
    });
    return newClasses;
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}
}

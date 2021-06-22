import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { BreakpointValues } from '../../shared/breakpoints.interface';
import { DyanmicStyleService } from '../../utils/dynamic-style.service';
import { SpacingResponsive, SpacingValues, SpacingVariant } from '../spacing.interface';

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
  set lgPaddingTop(padding: SpacingVariant | SpacingResponsive) {
    const newClasses = this.createNewClasses(padding, 'lg-padding__top');
    this.paddingTopClasses = this.toggleClasses(newClasses, this.paddingTopClasses);
  }

  paddingRightClasses: Array<string> = [];
  @Input()
  set lgPaddingRight(padding: SpacingVariant | SpacingResponsive) {
    const newClasses = this.createNewClasses(padding, 'lg-padding__right');
    this.paddingRightClasses = this.toggleClasses(newClasses, this.paddingRightClasses);
  }

  paddingBottomClasses: Array<string> = [];
  @Input()
  set lgPaddingBottom(padding: SpacingVariant | SpacingResponsive) {
    const newClasses = this.createNewClasses(padding, 'lg-padding__bottom');
    this.paddingBottomClasses = this.toggleClasses(newClasses, this.paddingBottomClasses);
  }

  paddingLeftClasses: Array<string> = [];
  @Input()
  set lgPaddingLeft(padding: SpacingVariant | SpacingResponsive) {
    const newClasses = this.createNewClasses(padding, 'lg-padding__left');
    this.paddingLeftClasses = this.toggleClasses(newClasses, this.paddingLeftClasses);
  }

  @Input()
  set lgPaddingHorizontal(padding: SpacingVariant | SpacingResponsive) {
    this.lgPaddingLeft = padding;
    this.lgPaddingRight = padding;
  }

  @Input()
  set lgPaddingVertical(padding: SpacingVariant | SpacingResponsive) {
    this.lgPaddingTop = padding;
    this.lgPaddingBottom = padding;
  }

  paddingClasses: Array<string> = [];
  @Input()
  set lgPadding(padding: SpacingVariant | SpacingResponsive) {
    const newClasses = this.createNewClasses(padding, 'padding');
    this.paddingClasses = this.toggleClasses(newClasses, this.paddingClasses);
  }

  createNewClasses(spacing: SpacingVariant | SpacingResponsive, spacingProp: string) {
    const newClasses = [];
    if (!spacing) {
      return [];
    }
    if (typeof spacing === 'object') {
      Object.keys(spacing).forEach((key) => {
        const className = `lg-${spacingProp}--${key}--${spacing[key]}`;
        const spacingKey = spacing[key];
        const styleRule = `${spacingProp}: ${SpacingValues[spacingKey]}`;
        this.dynamicStyleService.addStyleToMediaQuery(
          className,
          styleRule,
          BreakpointValues[key],
        );
        newClasses.push(className);
      });
    } else {
      const className = `lg-${spacingProp}--${spacing}`;
      const styleRule = `${spacingProp}: ${SpacingValues[spacing]}`;
      this.dynamicStyleService.addStyle(className, styleRule);
      newClasses.push([`lg-${spacingProp}--${spacing}`]);
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

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private dynamicStyleService: DyanmicStyleService,
  ) {}
}

import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import type { SpacingResponsive, SpacingVariant } from '../spacing.interface';
import { SpacingService } from '../spacing.service';

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
    this.paddingTopClasses = this.toggleClasses(
      this.spacingService.createNewClasses(padding, 'padding-top'),
      this.paddingTopClasses,
    );
  }

  paddingRightClasses: Array<string> = [];
  @Input()
  set lgPaddingRight(padding: SpacingVariant | SpacingResponsive) {
    this.paddingRightClasses = this.toggleClasses(
      this.spacingService.createNewClasses(padding, 'padding-right'),
      this.paddingRightClasses,
    );
  }

  paddingBottomClasses: Array<string> = [];
  @Input()
  set lgPaddingBottom(padding: SpacingVariant | SpacingResponsive) {
    this.paddingBottomClasses = this.toggleClasses(
      this.spacingService.createNewClasses(padding, 'padding-bottom'),
      this.paddingBottomClasses,
    );
  }

  paddingLeftClasses: Array<string> = [];
  @Input()
  set lgPaddingLeft(padding: SpacingVariant | SpacingResponsive) {
    this.paddingLeftClasses = this.toggleClasses(
      this.spacingService.createNewClasses(padding, 'padding-left'),
      this.paddingLeftClasses,
    );
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
    this.paddingClasses = this.toggleClasses(
      this.spacingService.createNewClasses(padding, 'padding'),
      this.paddingClasses,
    );
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
    private spacingService: SpacingService,
  ) {}
}

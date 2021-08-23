import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import type { SpacingResponsive, SpacingVariant } from '../spacing.interface';
import { SpacingService } from '../spacing.service';

@Directive({
  selector: `
    [lgMargin],
    [lgMarginVertical],
    [lgMarginHorizontal],
    [lgMarginTop],
    [lgMarginRight],
    [lgMarginBottom],
    [lgMarginLeft]
  `,
})
export class LgMarginDirective {
  marginTopClasses: Array<string> = [];
  @Input()
  set lgMarginTop(margin: SpacingVariant | SpacingResponsive) {
    this.marginTopClasses = this.toggleClasses(
      this.spacingService.createNewClasses(margin, 'margin-top'),
      this.marginTopClasses,
    );
  }

  marginRightClasses: Array<string> = [];
  @Input()
  set lgMarginRight(margin: SpacingVariant | SpacingResponsive) {
    this.marginRightClasses = this.toggleClasses(
      this.spacingService.createNewClasses(margin, 'margin-right'),
      this.marginRightClasses,
    );
  }

  marginBottomClasses: Array<string> = [];
  @Input()
  set lgMarginBottom(margin: SpacingVariant | SpacingResponsive) {
    this.marginBottomClasses = this.toggleClasses(
      this.spacingService.createNewClasses(margin, 'margin-bottom'),
      this.marginBottomClasses,
    );
  }

  marginLeftClasses: Array<string> = [];
  @Input()
  set lgMarginLeft(margin: SpacingVariant | SpacingResponsive) {
    this.marginLeftClasses = this.toggleClasses(
      this.spacingService.createNewClasses(margin, 'margin-left'),
      this.marginLeftClasses,
    );
  }

  @Input()
  set lgMarginHorizontal(margin: SpacingVariant | SpacingResponsive) {
    this.lgMarginLeft = margin;
    this.lgMarginRight = margin;
  }

  @Input()
  set lgMarginVertical(margin: SpacingVariant | SpacingResponsive) {
    this.lgMarginTop = margin;
    this.lgMarginBottom = margin;
  }

  marginClasses: Array<string> = [];
  @Input()
  set lgMargin(margin: SpacingVariant | SpacingResponsive) {
    this.marginClasses = this.toggleClasses(
      this.spacingService.createNewClasses(margin, 'margin'),
      this.marginClasses,
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

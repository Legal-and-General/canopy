import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

import type { Breakpoints } from '../../shared/breakpoints.interface';
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
    [lgMarginLeft],
    [lgMarginNoneAt],
    [lgMarginVerticalNoneAt],
    [lgMarginHorizontalNoneAt],
    [lgMarginTopNoneAt],
    [lgMarginRightNoneAt],
    [lgMarginBottomNoneAt],
    [lgMarginLeftNoneAt]
  `,
  standalone: true,
})
export class LgMarginDirective {
  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);
  private spacingService = inject(SpacingService);

  marginTopClasses: Array<string> = [];
  marginRightClasses: Array<string> = [];
  marginBottomClasses: Array<string> = [];
  marginLeftClasses: Array<string> = [];
  marginClasses: Array<string> = [];
  marginTopNoneAtClasses: Array<string> = [];
  marginRightNoneAtClasses: Array<string> = [];
  marginBottomNoneAtClasses: Array<string> = [];
  marginLeftNoneAtClasses: Array<string> = [];
  marginNoneAtClasses: Array<string> = [];

  @Input()
  set lgMarginTop(margin: SpacingVariant | SpacingResponsive) {
    this.marginTopClasses = this.toggleClasses(
      this.spacingService.createNewClasses(margin, 'margin-top'),
      this.marginTopClasses,
    );
  }
  @Input()
  set lgMarginRight(margin: SpacingVariant | SpacingResponsive) {
    this.marginRightClasses = this.toggleClasses(
      this.spacingService.createNewClasses(margin, 'margin-right'),
      this.marginRightClasses,
    );
  }

  @Input()
  set lgMarginBottom(margin: SpacingVariant | SpacingResponsive) {
    this.marginBottomClasses = this.toggleClasses(
      this.spacingService.createNewClasses(margin, 'margin-bottom'),
      this.marginBottomClasses,
    );
  }

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

  @Input()
  set lgMargin(margin: SpacingVariant | SpacingResponsive) {
    this.marginClasses = this.toggleClasses(
      this.spacingService.createNewClasses(margin, 'margin'),
      this.marginClasses,
    );
  }

  @Input()
  set lgMarginTopNoneAt(breakpoint: Breakpoints | Array<Breakpoints> | null) {
    const classNames = this.spacingService.createNoneAtClass(breakpoint, 'margin-top');

    this.marginTopNoneAtClasses = this.toggleClasses(
      classNames,
      this.marginTopNoneAtClasses,
    );
  }

  @Input()
  set lgMarginRightNoneAt(breakpoint: Breakpoints | Array<Breakpoints> | null) {
    const classNames = this.spacingService.createNoneAtClass(breakpoint, 'margin-right');

    this.marginRightNoneAtClasses = this.toggleClasses(
      classNames,
      this.marginRightNoneAtClasses,
    );
  }

  @Input()
  set lgMarginBottomNoneAt(breakpoint: Breakpoints | Array<Breakpoints> | null) {
    const classNames = this.spacingService.createNoneAtClass(breakpoint, 'margin-bottom');

    this.marginBottomNoneAtClasses = this.toggleClasses(
      classNames,
      this.marginBottomNoneAtClasses,
    );
  }

  @Input()
  set lgMarginLeftNoneAt(breakpoint: Breakpoints | Array<Breakpoints> | null) {
    const classNames = this.spacingService.createNoneAtClass(breakpoint, 'margin-left');

    this.marginLeftNoneAtClasses = this.toggleClasses(
      classNames,
      this.marginLeftNoneAtClasses,
    );
  }

  @Input()
  set lgMarginHorizontalNoneAt(breakpoint: Breakpoints | Array<Breakpoints> | null) {
    this.lgMarginLeftNoneAt = breakpoint;
    this.lgMarginRightNoneAt = breakpoint;
  }

  @Input()
  set lgMarginVerticalNoneAt(breakpoint: Breakpoints | Array<Breakpoints> | null) {
    this.lgMarginTopNoneAt = breakpoint;
    this.lgMarginBottomNoneAt = breakpoint;
  }

  @Input()
  set lgMarginNoneAt(breakpoint: Breakpoints | Array<Breakpoints> | null) {
    const classNames = this.spacingService.createNoneAtClass(breakpoint, 'margin');

    this.marginNoneAtClasses = this.toggleClasses(classNames, this.marginNoneAtClasses);
  }

  toggleClasses(newClasses: Array<string>, oldClasses: Array<string>) {
    if (oldClasses.length) {
      oldClasses.forEach(oldClass => {
        this.renderer.removeClass(this.hostElement.nativeElement, oldClass);
      });
    }

    newClasses.forEach(newClass => {
      this.renderer.addClass(this.hostElement.nativeElement, newClass);
    });

    return newClasses;
  }
}

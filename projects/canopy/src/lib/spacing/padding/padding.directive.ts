import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

import type { Breakpoints } from '../../shared/breakpoints.interface';
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
    [lgPaddingLeft],
    [lgPaddingNoneAt],
    [lgPaddingVerticalNoneAt],
    [lgPaddingHorizontalNoneAt],
    [lgPaddingTopNoneAt],
    [lgPaddingRightNoneAt],
    [lgPaddingBottomNoneAt],
    [lgPaddingLeftNoneAt]
  `,
  standalone: true,
})
export class LgPaddingDirective {
  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);
  private spacingService = inject(SpacingService);

  paddingTopClasses: Array<string> = [];
  paddingRightClasses: Array<string> = [];
  paddingBottomClasses: Array<string> = [];
  paddingLeftClasses: Array<string> = [];
  paddingClasses: Array<string> = [];
  paddingTopNoneAtClasses: Array<string> = [];
  paddingRightNoneAtClasses: Array<string> = [];
  paddingBottomNoneAtClasses: Array<string> = [];
  paddingLeftNoneAtClasses: Array<string> = [];
  paddingNoneAtClasses: Array<string> = [];

  @Input()
  set lgPaddingTop(padding: SpacingVariant | SpacingResponsive) {
    this.paddingTopClasses = this.toggleClasses(
      this.spacingService.createNewClasses(padding, 'padding-top'),
      this.paddingTopClasses,
    );
  }

  @Input()
  set lgPaddingRight(padding: SpacingVariant | SpacingResponsive) {
    this.paddingRightClasses = this.toggleClasses(
      this.spacingService.createNewClasses(padding, 'padding-right'),
      this.paddingRightClasses,
    );
  }

  @Input()
  set lgPaddingBottom(padding: SpacingVariant | SpacingResponsive) {
    this.paddingBottomClasses = this.toggleClasses(
      this.spacingService.createNewClasses(padding, 'padding-bottom'),
      this.paddingBottomClasses,
    );
  }

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

  @Input()
  set lgPadding(padding: SpacingVariant | SpacingResponsive) {
    this.paddingClasses = this.toggleClasses(
      this.spacingService.createNewClasses(padding, 'padding'),
      this.paddingClasses,
    );
  }

  @Input()
  set lgPaddingTopNoneAt(breakpoint: Breakpoints) {
    const className = this.spacingService.createNoneAtClass(breakpoint, 'padding-top');

    this.paddingTopNoneAtClasses = this.toggleClasses(
      className
        ? [ className ]
        : [],
      this.paddingTopNoneAtClasses,
    );
  }

  @Input()
  set lgPaddingRightNoneAt(breakpoint: Breakpoints) {
    const className = this.spacingService.createNoneAtClass(breakpoint, 'padding-right');

    this.paddingRightNoneAtClasses = this.toggleClasses(
      className
        ? [ className ]
        : [],
      this.paddingRightNoneAtClasses,
    );
  }

  @Input()
  set lgPaddingBottomNoneAt(breakpoint: Breakpoints) {
    const className = this.spacingService.createNoneAtClass(breakpoint, 'padding-bottom');

    this.paddingBottomNoneAtClasses = this.toggleClasses(
      className
        ? [ className ]
        : [],
      this.paddingBottomNoneAtClasses,
    );
  }

  @Input()
  set lgPaddingLeftNoneAt(breakpoint: Breakpoints) {
    const className = this.spacingService.createNoneAtClass(breakpoint, 'padding-left');

    this.paddingLeftNoneAtClasses = this.toggleClasses(
      className
        ? [ className ]
        : [],
      this.paddingLeftNoneAtClasses,
    );
  }

  @Input()
  set lgPaddingHorizontalNoneAt(breakpoint: Breakpoints) {
    this.lgPaddingLeftNoneAt = breakpoint;
    this.lgPaddingRightNoneAt = breakpoint;
  }

  @Input()
  set lgPaddingVerticalNoneAt(breakpoint: Breakpoints) {
    this.lgPaddingTopNoneAt = breakpoint;
    this.lgPaddingBottomNoneAt = breakpoint;
  }

  @Input()
  set lgPaddingNoneAt(breakpoint: Breakpoints) {
    const className = this.spacingService.createNoneAtClass(breakpoint, 'padding');

    this.paddingNoneAtClasses = this.toggleClasses(
      className
        ? [ className ]
        : [],
      this.paddingNoneAtClasses,
    );
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

import { Directive, ElementRef, Input, HostBinding, Renderer2 } from '@angular/core';

import { OrientationResponsive } from './orientation.interface';

@Directive({
  selector: '[lgOrientation]',
})
export class LgOrientationDirective {
  orientationClasses: Array<string> = [];

  @Input()
  set lgOrientation(orientation: OrientationResponsive) {
    if (orientation) {
      this.orientationClasses = this.toggleClasses(
        this.createNewOrientationClasses(orientation),
        this.orientationClasses,
      );
    }
  }
  @HostBinding('class.lg-orientation') get orientationClass(): number {
    return this.orientationClasses.length;
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  toggleClasses(newClasses: Array<string>, oldClasses: Array<string>): Array<string> {
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

  createNewOrientationClasses(rules: OrientationResponsive): Array<string> {
    const newClasses = [];

    Object.keys(rules).forEach(key => {
      newClasses.push(`lg-orientation--${key}--${rules[key]}`);
    });

    return newClasses;
  }
}

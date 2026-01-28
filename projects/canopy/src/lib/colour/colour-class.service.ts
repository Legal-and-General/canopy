import { Injectable, Renderer2 } from '@angular/core';

import type { Colour, ColourTheme } from './colour.interface';

/**
 * Private service for managing colour-related CSS classes.
 */
@Injectable()
export class ColourClassService {
  /**
   * Applies colour classes to an element.
   * Applies lg-mode-{colour} and lg-theme-{theme} classes.
   *
   * @param renderer - Angular Renderer2 instance
   * @param element - Native element to apply classes to
   * @param colour - The colour mode (blue, green, red, yellow)
   * @param theme - Theme type (neutral, neutral-inverse, subtle, bold), defaults to 'neutral'
   * @param previousClasses - Previously applied classes to remove
   * @returns Array of newly applied classes for tracking
   */
  applyColourClasses(
    renderer: Renderer2,
    element: HTMLElement,
    colour: Colour,
    theme: ColourTheme = 'neutral',
    previousClasses?: Array<string>,
  ): Array<string> {
    // Remove previous classes if they exist
    if (previousClasses && previousClasses.length > 0) {
      previousClasses.forEach(className => {
        renderer.removeClass(element, className);
      });
    }

    const newClasses: Array<string> = [];

    // Apply colour classes
    const colourClass = `lg-mode-${colour}`;
    const themeClass = `lg-theme-${theme}`;

    renderer.addClass(element, colourClass);
    renderer.addClass(element, themeClass);

    newClasses.push(colourClass, themeClass);

    return newClasses;
  }

  /**
   * Removes all colour-related classes from an element.
   *
   * @param renderer - Angular Renderer2 instance
   * @param element - Native element to remove classes from
   * @param classes - Array of classes to remove
   */
  removeColourClasses(
    renderer: Renderer2,
    element: HTMLElement,
    classes: Array<string>,
  ): void {
    if (classes && classes.length > 0) {
      classes.forEach(className => {
        renderer.removeClass(element, className);
      });
    }
  }
}

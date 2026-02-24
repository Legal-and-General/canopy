import { Injectable, Renderer2 } from '@angular/core';

import type { Status, Theme } from './status.interface';

/**
 * Private service for managing status-related CSS classes.
 */
@Injectable()
export class StatusClassService {
  /**
   * Applies status classes to an element.
   * Applies lg-status-{status} and lg-theme-{theme} classes.
   *
   * @param renderer - Angular Renderer2 instance
   * @param element - Native element to apply classes to
   * @param status - The status type (generic, info, error, warning, success)
   * @param theme - Theme type (neutral, neutral-inverse, subtle, bold), defaults to 'neutral'
   * @param previousClasses - Previously applied classes to remove
   * @returns Array of newly applied classes for tracking
   */
  applyStatusClasses(
    renderer: Renderer2,
    element: HTMLElement,
    status: Status,
    theme: Theme = 'neutral',
    previousClasses?: Array<string>,
  ): Array<string> {
    // Remove previous classes if they exist
    if (previousClasses && previousClasses.length > 0) {
      previousClasses.forEach(className => {
        renderer.removeClass(element, className);
      });
    }

    const newClasses: Array<string> = [];

    // Apply status classes
    const statusClass = `lg-status-${status}`;
    const themeClass = `lg-theme-${theme}`;

    renderer.addClass(element, statusClass);
    renderer.addClass(element, themeClass);

    newClasses.push(statusClass, themeClass);

    return newClasses;
  }

  /**
   * Removes all status-related classes from an element.
   *
   * @param renderer - Angular Renderer2 instance
   * @param element - Native element to remove classes from
   * @param classes - Array of classes to remove
   */
  removeStatusClasses(
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

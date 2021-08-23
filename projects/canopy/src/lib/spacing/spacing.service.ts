import { Injectable } from '@angular/core';

import { BreakpointValues } from '../shared/breakpoints.interface';
import { DynamicStyleService } from '../utils/dynamic-style.service';
import { SpacingResponsive, SpacingValues, SpacingVariant } from './spacing.interface';

@Injectable({ providedIn: 'root' })
export class SpacingService {
  constructor(private dynamicStyleService: DynamicStyleService) {}

  /**
   * Returns the correct class names
   * e.g. `lg-margin__right`
   * and also creates new CSS selector and decalartion based on the spacing value
   * which are applied via the DynamicStyleService:
   * e.g. `.lg-padding`, `padding: 1rem`
   *
   * @param spacing e.g. 'sm' for SpacingVariant, or {sm: 'lg', md: 'xxl'} for SpacingResponsive
   * @param cssProperty e.g. 'padding-top' or 'margin-right'
   * @returns an array of the created class names
   */
  createNewClasses(
    spacing: SpacingVariant | SpacingResponsive,
    cssProperty: string,
  ): Array<string> {
    const newClasses = [];
    const responsiveSpacingRules = [];
    if (!spacing) {
      return [];
    }

    if (typeof spacing === 'object') {
      // Responsive e.g. spacing = {sm: "md", md: "xxl"}
      Object.keys(spacing).forEach((key) => {
        const selector = `lg-${cssProperty.replace('-', '__')}--${key}--${spacing[key]}`;
        responsiveSpacingRules.push({
          selector,
          declaration: `${cssProperty}:${SpacingValues[spacing[key]]}!important`,
          breakpoint: BreakpointValues[key],
        });
        newClasses.push(selector);
      });
      this.dynamicStyleService.addRulesToMediaQuery(responsiveSpacingRules);
    } else {
      // Non-resposive e.g. spacing = "sm"
      const selector = `lg-${cssProperty.replace('-', '__')}--${spacing}`;
      this.dynamicStyleService.addRules([
        {
          selector,
          declaration: `${cssProperty}:${SpacingValues[spacing]}!important`,
        },
      ]);
      newClasses.push(selector);
    }
    return newClasses;
  }
}

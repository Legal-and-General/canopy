import { Injectable } from '@angular/core';

import { BreakpointValues } from '../shared/breakpoints.interface';

interface Rule {
  selector: string;
  declaration: string;
}
interface RuleResponsive {
  selector: string;
  declaration: string;
  breakpoint: BreakpointValues;
  addAtStart?: boolean;
}

@Injectable({
  providedIn: 'root',
})
/**
 * Dynamically add CSS rules to a <style> tag in the <head>
 */
export class DynamicStyleService {
  styleTag = null;
  selectors = [];
  mediaQueries = {};

  constructor() {
    this.addStyleTag();
  }

  addRules(rules: Array<Rule>): void {
    // cache current styles to avoid multiple edits to the innerHTML
    let styleTagCache = this.styleTag.innerHTML.slice();

    rules
      .filter(r => !this.selectors.includes(r.selector))
      .map(r => {
        this.selectors.push(r.selector);

        styleTagCache += `.${r.selector}{${r.declaration}}`;
      });

    this.styleTag.innerHTML = styleTagCache;
  }

  addRulesToMediaQuery(rules: Array<RuleResponsive>): void {
    // cache current styles to avoid multiple edits to the innerHTML
    let styleTagCache = this.styleTag.innerHTML.slice();

    rules.map(r => {
      if (!this.mediaQueries[r.breakpoint]) {
        styleTagCache += this.createMediaQuery(r.breakpoint);
      }

      if (this.mediaQueries[r.breakpoint].includes(r.selector)) {
        return;
      }

      // create record to avoid adding same rule twice
      this.mediaQueries[r.breakpoint].push(r.selector);

      const rule = `.${r.selector}{${r.declaration}}`;

      styleTagCache = this.insertRuleInsideMediaQuery(
        styleTagCache,
        r.breakpoint,
        rule,
        r.addAtStart,
      );
    });

    // finally, update the style tag with all changes at once
    this.styleTag.innerHTML = styleTagCache;
  }

  /**
   * Inserts the given CSS rule into a media query within the cssString
   * e.g. consider cssString to be '@media(min-width:48rem){.joe{top:0}}',
   * and the breakpoint is 48rem, adding '.bloggs{top:0}' would result in:
   * '@media(min-width:48rem){.joe{top:0}.bloggs{top:0}}'
   *
   * @param cssString e.g. the cached CSS
   * @param breakpoint e.g. 20rem, 48rem etc - must be one of BreakpointValues
   * @param rule e.g. '.lg-padding--sm{padding:1rem}'
   * @param insertAtStart adds after the opening `{`, defaults to before the closing `}`
   * @returns the updated string
   */
  insertRuleInsideMediaQuery(
    cssString: string,
    breakpoint: BreakpointValues,
    rule: string,
    atStart = false,
  ): string {
    const search = `@media(min-width:${breakpoint}){`;
    let index = cssString.indexOf(search);

    if (index === -1) {
      console.warn('Media query not found in string, cannot add rule.');

      return cssString;
    }

    index += search.length;

    // Insert at the start of the media query, after the opening `{` bracket

    if (atStart) {
      return cssString.substring(0, index) + `${rule}` + cssString.substring(index);
    }

    // Insert at the end of the media query, before the closing `}` bracket

    let balance = 0,
      pos = null;

    for (let i = index; i < cssString.length; i++) {
      const char = cssString[i];

      if (char === '{') {
        balance++;
      } else if (char === '}') {
        balance--;
      }

      if (balance === -1) {
        pos = i;
        break;
      }
    }

    if (pos === null) {
      console.warn('Cannot add rule to media query in CSS string, invalid CSS string');

      return cssString;
    }

    return cssString.substring(0, pos) + `${rule}` + cssString.substring(pos);
  }

  private addStyleTag(): void {
    this.styleTag = document.createElement('style');
    this.styleTag.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(this.styleTag);
  }

  private createMediaQuery(breakpoint: BreakpointValues): string {
    if (this.mediaQueries[breakpoint]) {
      return;
    }

    this.mediaQueries[breakpoint] = [];

    return `@media(min-width:${breakpoint}){}`;
  }
}

import { Injectable } from '@angular/core';

import { BreakpointValues } from '../shared/breakpoints.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Dynamically add styles to a <style> tag in <head>
 */
export class DyanmicStyleService {
  styleTag = null;
  selectors = [];
  mediaQueries = {};

  private createStyleTag(): void {
    this.styleTag = document.createElement('style');
    this.styleTag.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(this.styleTag);
  }

  private addMediaQuery(breakpoint: BreakpointValues): void {
    if (!this.styleTag) {
      this.createStyleTag();
    }
    if (this.mediaQueries[breakpoint]) {
      return;
    }
    this.mediaQueries[breakpoint] = [];
    this.styleTag.innerHTML += `@media(min-width:${breakpoint}){}`;
  }

  addStyle(selector: string, style: string): void {
    if (!this.styleTag) {
      this.createStyleTag();
    }
    if (this.selectors.includes(selector)) {
      return;
    }
    this.selectors.push(selector);
    const styleString = `.${selector}{${style}!important}`;
    this.styleTag.innerHTML += styleString;
  }

  addStyleToMediaQuery(
    selector: string,
    style: string,
    breakpoint: BreakpointValues,
  ): void {
    if (!this.styleTag) {
      this.createStyleTag();
    }
    if (!this.mediaQueries[breakpoint]) {
      this.addMediaQuery(breakpoint);
    }
    if (this.mediaQueries[breakpoint].includes(selector)) {
      return;
    }

    this.mediaQueries[breakpoint].push(selector);

    const styleString = `.${selector}{${style}!important}`;

    const innerHTML = this.styleTag.innerHTML;
    const mqIndex = innerHTML.indexOf(`@media(min-width:${breakpoint}){`) + 1;
    const htmlArr = [...innerHTML];
    htmlArr.splice(mqIndex, 0, styleString);
    this.styleTag.innerHTML = htmlArr.join('');
  }
}

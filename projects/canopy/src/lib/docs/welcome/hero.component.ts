import { Component } from '@angular/core';

import { LgIconComponent, lgIconLinkExternal, LgIconRegistry } from '../../icon';
import { LgMarginDirective } from '../../spacing';

@Component({
  selector: 'lg-docs-welcome-hero',
  standalone: true,
  imports: [ LgMarginDirective, LgIconComponent ],
  template: `
    <img
      class="welcome-img"
      src="docs/welcome/hero.svg"
      alt="Canopy"
      lgMarginBottom="lg"
    />

    <h1 class="lg-font--expressive lg-font-size-7--strong" lgMarginBottom="sm">
      <span class="welcome-heading no-wrap">Welcome to Canopy,</span>
      <br />
      The digital design system
      <br />
      from <span class="no-wrap">Legal & General.</span>
    </h1>

    <a href="https://www.nngroup.com/articles/design-systems-101/" target="_blank">
      What's a design system?
      <span class="lg-visually-hidden"> opens in a new tab</span>
      <lg-icon name="link-external"></lg-icon>
    </a>
  `,
  styles: [
    `
      .welcome-img {
        width: 100%;
      }

      .welcome-heading {
        color: var(--color-super-blue);
      }

      .no-wrap {
        white-space: nowrap;
      }
    `,
  ],
})
export class DocsWelcomeHeroComponent {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([ lgIconLinkExternal ]);
  }
}

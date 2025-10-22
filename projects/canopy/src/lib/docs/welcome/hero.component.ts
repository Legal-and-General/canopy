import { Component } from '@angular/core';

import { LgIconComponent } from '../../icon';
import { LgMarginDirective } from '../../spacing';
import { LgAlertComponent } from '../../alert';

@Component({
  selector: 'lg-docs-welcome-hero',
  imports: [ LgMarginDirective, LgIconComponent, LgAlertComponent ],
  template: `
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

    <lg-alert variant="info" lgMarginTop="xl">
      <p>
        <strong
          >You're viewing an older version of Canopy that doesn't include L&G's brand
          modernisation updates.</strong
        >
      </p>
      <p>We won't be supporting this version from Q2 of 2026.</p>
      <p>
        We'd recommend you upgrade to the latest version so you can benefit from the new
        brand as we roll it out over 2025-2026. If you need help to upgrade, or would like
        to be kept up to date with the roll out, please
        <a
          href="mailto:CanopyDesignSystem@landg.com?subject=Tell me about Canopy updates (SB Legacy)"
          >get in touch</a
        >
        and let us know which application or project you are using Canopy for.
      </p>
    </lg-alert>
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
export class DocsWelcomeHeroComponent {}

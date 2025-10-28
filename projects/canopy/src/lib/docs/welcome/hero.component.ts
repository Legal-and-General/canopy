import { Component } from '@angular/core';

import { LgIconComponent } from '../../icon';
import { LgMarginDirective } from '../../spacing';
import { LgAlertComponent } from '../../alert';

@Component({
  selector: 'lg-docs-welcome-hero',
  imports: [ LgMarginDirective, LgIconComponent, LgAlertComponent ],
  template: `
    <h1 class="lg-font--expressive lg-font-size-7--700" lgMarginBottom="sm">
      <span class="welcome-heading no-wrap">Welcome to Canopy,</span>
      <br />
      The digital design system
      <br />
      from <span class="no-wrap">Legal & General.</span>
    </h1>

    <a href="https://www.nngroup.com/articles/design-systems-101/" target="_blank">
      What's a design system?
      <span class="lg-visually-hidden"> opens in a new tab</span>
      <lg-icon name="link-external" />
    </a>

    <lg-alert variant="info" lgMarginTop="xl">
      <p>
        <strong
          >Good news! You're viewing the latest version of L&G's digital design language
          system Canopy as we roll out brand modernisation throughout 2025-2026.</strong
        >
      </p>
      <p>
        It's easy to see what's been updated already - if the menu item says 'pending'
        then we haven't got to it yet - but we're working on it. Find our releases
        <a
          href="https://github.com/Legal-and-General/canopy/releases?q=&expanded=true"
          target="_blank"
          >here</a
        >.
      </p>
      <p>
        <strong>Need help or want to be kept in the loop?</strong> Please
        <a
          href="mailto:CanopyDesignSystem@landg.com?subject=Tell me about Canopy updates (SB)"
          >email us</a
        >
        and let us know which application or project you are using Canopy for and we'll
        get in touch.
      </p>
      <p>
        <strong>Need to see the legacy version of Canopy?</strong> It's still available
        <a
          href="https://legal-and-general.github.io/canopy/lg-sb-legacy/?path=/docs/welcome--docs"
          target="_blank"
          >here</a
        >
        but we won't be supporting this version from Q2 2026. If you need help to upgrade
        to the latest version and benefit from all the brand updates please
        <a
          href="mailto:CanopyDesignSystem@landg.com?subject=Tell me about Canopy updates (SB)"
          >get in touch</a
        >.
      </p>
    </lg-alert>
  `,
  styles: [
    `
      .welcome-img {
        width: 100%;
      }

      .welcome-heading {
        color: var(--colour-blue-600);
      }

      .no-wrap {
        white-space: nowrap;
      }
    `,
  ],
})
export class DocsWelcomeHeroComponent {}

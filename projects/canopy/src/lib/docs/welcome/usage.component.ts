import { Component } from '@angular/core';

import { LgMarginDirective } from '../../spacing';

@Component({
  selector: 'lg-docs-welcome-usage',
  imports: [ LgMarginDirective ],
  template: `
    <img src="docs/welcome/builders.svg" alt="" />

    <div class="usage" [lgMarginLeft]="{ xs: 'none', md: '8' }">
      <h2 class="lg-font--expressive lg-font-size-4--700">First time using Canopy?</h2>

      <p>
        Successful Canopy projects start with the right setup - If it's your first time
        using Canopy in a project, we strongly recommend reading our usage guide before
        you begin.
      </p>

      <ul lgMargin="none">
        <li>
          <a
            href="./?path=/docs/development-using-canopy-installation-and-usage--docs"
            target="_top"
          >
            Read about how to use the Angular library
          </a>
        </li>
        <li lgMarginTop="4">
          <a
            href="mailto:CanopyDesignSystem@landg.com?subject=Request%20to%20use%20Canopy%20Figma%20library&body=My%20name%0D%0A%0D%0AMy%20email%20address%0D%0A%0D%0ATell%20us%20a%20bit%20more%20about%20the%20project%20you%20intend%20to%20use%20it%20on%20(optional)"
            >Request access to the Figma design libraries</a
          >
        </li>
      </ul>
    </div>
  `,
  styleUrls: [ './usage.component.scss' ],
})
export class DocsWelcomeUsageComponent {}

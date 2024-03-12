import { Component } from '@angular/core';

import { LgMarginDirective } from '../../spacing';

import { DocsWelcomeHeroComponent } from './hero.component';
import { DocsWelcomeBenefitsComponent } from './benefists.component';
import { DocsWelcomeUsageComponent } from './usage.component';
import { DocsWelcomeInsideComponent } from './inside.component';
import { DocsWelcomeBottomLinksSectionComponent } from './bottom-links-section.component';

const pageTemplate = `
<lg-docs-welcome-hero></lg-docs-welcome-hero>
<lg-docs-welcome-benefits lgMarginTop="xxxl"></lg-docs-welcome-benefits>
<lg-docs-welcome-usage lgMarginTop="xxxl" lgPaddingBottom="sm"></lg-docs-welcome-usage>
<lg-docs-welcome-inside lgMarginTop="xxxl"></lg-docs-welcome-inside>

<div lgMarginTop="xxxl" class="bottom-section">
  <lg-docs-welcome-bottom-links-section
    heading="Contribute to Canopy"
    text="Read about how you can contribute to Canopy here:"
    [links]="contributeLinks"
  ></lg-docs-welcome-bottom-links-section>

  <lg-docs-welcome-bottom-links-section
    heading="Get in touch"
    text="If you need any specific advice or want to give us feedback, don't hesitate to get in touch:"
    [links]="getInTouchLinks"
  ></lg-docs-welcome-bottom-links-section>
</div>
`;

@Component({
  selector: 'lg-docs-welcome-page',
  standalone: true,
  imports: [
    DocsWelcomeHeroComponent,
    DocsWelcomeBenefitsComponent,
    DocsWelcomeUsageComponent,
    DocsWelcomeInsideComponent,
    DocsWelcomeBottomLinksSectionComponent,
    LgMarginDirective,
  ],
  template: pageTemplate,
  styleUrls: [ './welcome.component.scss' ],
})
export class DocsWelcomePageComponent {
  contributeLinks: Array<{ href: string; text: string }> = [
    {
      href: 'https://github.com/Legal-and-General/canopy/blob/master/docs/CONTRIBUTING.md',
      text: 'Contribute code',
    },
    {
      href: 'https://forms.office.com/r/z6sjtcSRaT',
      text: 'Contribute design',
    },
    {
      href: 'https://github.com/Legal-and-General/canopy/issues',
      text: 'Raise an issue',
    },
    {
      href: 'https://github.com/Legal-and-General/canopy/discussions/categories/canopy-requests',
      text: 'Request a new feature or modification',
    },
  ];

  getInTouchLinks: Array<{ href: string; text: string }> = [
    {
      href: 'https://forms.office.com/r/Wyq6asqWht',
      text: 'Request help',
    },
    {
      href: 'https://forms.office.com/r/6UMyXFeupH',
      text: 'Help us improve Canopy',
    },
  ];
}

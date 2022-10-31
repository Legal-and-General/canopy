import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgMarginModule } from '../../spacing';
import { LgLinkMenuModule } from '../../link-menu';
import { LgSeparatorModule } from '../../separator';

@Component({
  selector: 'lg-docs-welcome-bottom-links-section',
  standalone: true,
  imports: [ CommonModule, LgMarginModule, LgLinkMenuModule, LgSeparatorModule ],
  template: `
    <h2 class="lg-font--expressive lg-font-size-4--strong">{{ heading }}</h2>

    <p>{{ text }}</p>

    <lg-separator lgMarginBottom="none"></lg-separator>

    <lg-link-menu>
      <a *ngFor="let link of links" [href]="link.href" target="_blank">
        <lg-link-menu-item [internal]="false">
          <lg-link-menu-item-heading>{{ link.text }}</lg-link-menu-item-heading>
        </lg-link-menu-item>
      </a>
    </lg-link-menu>
  `,
  styleUrls: [ './bottom-links-section.component.scss' ],
})
export class DocsWelcomeBottomLinksSectionComponent {
  @Input() heading: string;
  @Input() text: string;
  @Input() links: Array<{ href: string; text: string }>;
}
